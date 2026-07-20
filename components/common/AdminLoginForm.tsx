"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormField } from "@/components/common/FormField";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { useAdminAuth } from "@/lib/AdminAuthContext";
import { login, requestLoginLink, AuthApiError } from "@/lib/authApi";

type View = "login" | "forgot" | "forgot-sent";

interface AdminLoginFormProps {
  onSuccess: () => void;
}

export function AdminLoginForm({ onSuccess }: Readonly<AdminLoginFormProps>) {
  const { setUser } = useAdminAuth();
  const [view, setView] = useState<View>("login");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId.trim() || !password) {
      setError("Please enter your user ID and password.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      const user = await login(userId.trim(), password);
      setUser(user);
      onSuccess();
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgot = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId.trim()) {
      setError("Please enter your user ID.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      await requestLoginLink(userId.trim());
      setView("forgot-sent");
    } catch (err) {
      setError(err instanceof AuthApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (view === "forgot-sent") {
    return (
      <motion.div
        key="forgot-sent"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-full border border-primary-brown/15 bg-primary-pink/30 p-5">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-primary-brown">
            <path d="M4 12L9 17L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Text size="base" className="text-primary-brown/75">
          If that user ID exists, a login link has been sent. Check the registered email and follow the link to sign in.
        </Text>
        <button
          type="button"
          onClick={() => {
            setView("login");
            setPassword("");
            setError("");
          }}
          className="mt-8 cursor-pointer text-sm text-primary-brown/75 underline-offset-2 hover:text-primary-brown hover:underline focus-visible:outline-2 focus-visible:outline-primary-brown"
        >
          Back to sign in
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {view === "login" ? (
        <motion.form
          key="login"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onSubmit={handleLogin}
          className="flex flex-col gap-6"
          noValidate
        >
          <FormField id="admin-userid" label="User ID" required>
            <Input
              id="admin-userid"
              name="userId"
              type="text"
              autoComplete="username"
              autoFocus
              placeholder="Your user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </FormField>

          <FormField id="admin-password" label="Password" required>
            <Input
              id="admin-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>

          <p aria-live="polite" className={`min-h-5 text-sm text-red-700 transition-opacity duration-200 ${error ? "opacity-100" : "opacity-0"}`}>
            {error}
          </p>

          <Button type="submit" disabled={isSubmitting} className="w-full disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>

          <button
            type="button"
            onClick={() => {
              setView("forgot");
              setError("");
            }}
            className="cursor-pointer text-center text-sm text-primary-brown/75 underline-offset-2 hover:text-primary-brown hover:underline focus-visible:outline-2 focus-visible:outline-primary-brown"
          >
            Forgot your password?
          </button>
        </motion.form>
      ) : (
        <motion.form
          key="forgot"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onSubmit={handleForgot}
          className="flex flex-col gap-6"
          noValidate
        >
          <Text size="sm" className="text-primary-brown/70">
            Enter your user ID and we will email a one time login link to the registered address.
          </Text>

          <FormField id="admin-forgot-userid" label="User ID" required>
            <Input
              id="admin-forgot-userid"
              name="userId"
              type="text"
              autoComplete="username"
              autoFocus
              placeholder="Your user ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </FormField>

          <p aria-live="polite" className={`min-h-5 text-sm text-red-700 transition-opacity duration-200 ${error ? "opacity-100" : "opacity-0"}`}>
            {error}
          </p>

          <Button type="submit" disabled={isSubmitting} className="w-full disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Sending..." : "Send login link"}
          </Button>

          <button
            type="button"
            onClick={() => {
              setView("login");
              setError("");
            }}
            className="cursor-pointer text-center text-sm text-primary-brown/75 underline-offset-2 hover:text-primary-brown hover:underline focus-visible:outline-2 focus-visible:outline-primary-brown"
          >
            Back to sign in
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FormField } from "@/components/common/FormField";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { createUser, UsersApiError, type AdminUserRecord } from "@/lib/usersAdminApi";

interface CreateUserFormProps {
  onCreated: (user: AdminUserRecord) => void;
  onCancel: () => void;
}

export function CreateUserForm({ onCreated, onCancel }: Readonly<CreateUserFormProps>) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userId.trim().length < 3) {
      setError("User ID must be at least 3 characters.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    try {
      const user = await createUser(userId.trim(), password);
      onCreated(user);
    } catch (err) {
      setError(err instanceof UsersApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      <FormField id="new-user-id" label="User ID" required>
        <Input
          id="new-user-id"
          name="userId"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="e.g. jamie"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </FormField>

      <FormField id="new-user-password" label="Password" required>
        <Input
          id="new-user-password"
          name="password"
          type="text"
          autoComplete="off"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>

      <p aria-live="polite" className={`min-h-5 text-sm text-red-700 transition-opacity duration-200 ${error ? "opacity-100" : "opacity-0"}`}>
        {error}
      </p>

      <div className="flex flex-col gap-3 xs:flex-row">
        <Button type="submit" disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? "Creating..." : "Create user"}
        </Button>
        <Button type="button" variant="ghost" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
      </div>
    </motion.form>
  );
}

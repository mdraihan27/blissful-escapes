"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { AdminLoginForm } from "@/components/common/AdminLoginForm";
import { useAdminAuth } from "@/lib/AdminAuthContext";

export function AdminLoginPageContent() {
  const router = useRouter();
  const { user, isLoading } = useAdminAuth();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/admin/dashboard");
    }
  }, [isLoading, user, router]);

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-white px-4 py-16 xs:px-5 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-pink/30 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary-beige/25 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative w-full max-w-md"
      >
        <div className="mb-10 flex flex-col items-center text-center">
          <Logo className="items-center" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary-brown/70">
            Admin access
          </p>
          <Heading as="h1" size="sm" className="mt-3">
            Sign in to your dashboard
          </Heading>
          <Text size="sm" className="mt-3 text-primary-brown/70">
            This area is restricted to Blissful Escapes staff.
          </Text>
        </div>

        <div className="rounded-2xl border border-primary-brown/20 bg-white p-6 shadow-xl shadow-primary-brown/15 xs:p-8 sm:p-10">
          <AdminLoginForm onSuccess={() => router.replace("/admin/dashboard")} />
        </div>
      </motion.div>
    </main>
  );
}

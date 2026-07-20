"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { CreateUserForm } from "@/components/common/users/CreateUserForm";
import { UsersTable } from "@/components/common/users/UsersTable";
import { listUsers, type AdminUserRecord } from "@/lib/usersAdminApi";
import { useAdminAuth } from "@/lib/AdminAuthContext";

export function UsersPageContent() {
  const { user: currentUser } = useAdminAuth();
  const [users, setUsers] = useState<AdminUserRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    let cancelled = false;

    listUsers()
      .then((data) => {
        if (!cancelled) setUsers(data);
      })
      .catch(() => {
        if (!cancelled) setError("Unable to load users right now.");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleCreated = (newUser: AdminUserRecord) => {
    setUsers((prev) => [newUser, ...prev]);
    setShowCreate(false);
  };

  return (
    <main className="relative min-h-dvh overflow-hidden px-4 py-10 xs:px-5 sm:px-6 sm:py-12 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary-pink/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-primary-beige/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">Access</p>
          <Heading as="h1" size="sm" className="mt-2">
            Users
          </Heading>
          <Text size="sm" className="mt-2 max-w-xl text-primary-brown/75">
            Everyone who can sign in to this dashboard.
          </Text>
        </div>

        {!showCreate && (
          <Button onClick={() => setShowCreate(true)} className="shrink-0">
            Add a user
          </Button>
        )}
      </motion.div>

      {error && (
        <p
          role="alert"
          className="relative mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <AnimatePresence>
        {showCreate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative mb-6 overflow-hidden"
          >
            <div className="rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] p-5 shadow-lg shadow-primary-brown/10 sm:p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">
                New user
              </p>
              <CreateUserForm onCreated={handleCreated} onCancel={() => setShowCreate(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`relative transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
      >
        <UsersTable users={users} currentUserId={currentUser?.userId ?? null} isLoading={isLoading} />
      </motion.div>
    </main>
  );
}

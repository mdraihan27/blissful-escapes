"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { MessageCard } from "@/components/common/messages/MessageCard";
import { MessageGroupDivider } from "@/components/common/messages/MessageGroupDivider";
import {
  listTripEnquiries,
  markEnquiriesRead,
  type TripEnquiryRecord,
} from "@/lib/tripEnquiryAdminApi";
import { useUnreadMessages } from "@/lib/UnreadMessagesContext";

const PAGE_SIZE = 10;

export function MessagesPageContent() {
  const { refresh } = useUnreadMessages();
  const [enquiries, setEnquiries] = useState<TripEnquiryRecord[]>([]);
  // Ids that were unread when this page loaded — the visual "new" grouping
  // stays fixed even after we mark them read in the background.
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    listTripEnquiries(page, PAGE_SIZE)
      .then((data) => {
        if (cancelled) return;
        setEnquiries(data.enquiries);
        setTotalPages(data.pagination.totalPages);
        setTotal(data.pagination.total);

        const unreadOnThisPage = data.enquiries.filter((e) => !e.isRead);
        setNewIds(new Set(unreadOnThisPage.map((e) => e._id)));

        // Mark this page's unread messages as read, then refresh the sidebar
        // badge. The snapshot above keeps the "New" divider showing for now.
        if (unreadOnThisPage.length > 0) {
          markEnquiriesRead(unreadOnThisPage.map((e) => e._id))
            .then(() => {
              if (!cancelled) refresh();
            })
            .catch(() => {
              // Non-blocking — the messages still render.
            });
        }
      })
      .catch(() => {
        if (!cancelled) setError("Unable to load messages right now.");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page, refresh]);

  const handlePageChange = (nextPage: number) => {
    setIsLoading(true);
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const newMessages = enquiries.filter((e) => newIds.has(e._id));
  const olderMessages = enquiries.filter((e) => !newIds.has(e._id));

  const renderCard = (enquiry: TripEnquiryRecord, orderIndex: number) => (
    <motion.div
      key={enquiry._id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(orderIndex * 0.04, 0.3) }}
    >
      <MessageCard enquiry={enquiry} isNew={newIds.has(enquiry._id)} />
    </motion.div>
  );

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
        className="relative mb-8 sm:mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-brown/75">Enquiries</p>
        <Heading as="h1" size="sm" className="mt-2">
          Messages
        </Heading>
        <Text size="sm" className="mt-2 max-w-xl text-primary-brown/75">
          {total > 0
            ? `${total.toLocaleString()} traveller${total === 1 ? "" : "s"} have reached out so far.`
            : "Trip enquiries from the site will show up here."}
        </Text>
      </motion.div>

      {error && (
        <p
          role="alert"
          className="relative mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <div className={`relative flex flex-col gap-4 transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}>
        {!isLoading && enquiries.length === 0 && !error && (
          <div className="rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] p-10 text-center shadow-lg shadow-primary-brown/10">
            <Text size="base" className="text-primary-brown/75">
              No messages yet.
            </Text>
          </div>
        )}

        {newMessages.length > 0 && (
          <>
            <MessageGroupDivider label="New" count={newMessages.length} tone="new" />
            {newMessages.map((enquiry, i) => renderCard(enquiry, i))}
          </>
        )}

        {olderMessages.length > 0 && (
          <>
            <MessageGroupDivider label="Earlier" tone="older" />
            {olderMessages.map((enquiry, i) => renderCard(enquiry, newMessages.length + i))}
          </>
        )}
      </div>

      {totalPages > 1 && (
        <div className="relative mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => handlePageChange(page - 1)}
            className="cursor-pointer rounded-lg border border-primary-brown/15 bg-white px-4 py-2 text-sm font-semibold text-primary-brown transition-colors duration-200 hover:bg-primary-brown/5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
          >
            Previous
          </button>
          <span className="px-3 text-sm font-medium text-primary-brown/70">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => handlePageChange(page + 1)}
            className="cursor-pointer rounded-lg border border-primary-brown/15 bg-white px-4 py-2 text-sm font-semibold text-primary-brown transition-colors duration-200 hover:bg-primary-brown/5 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-brown"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

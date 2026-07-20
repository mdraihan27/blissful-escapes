import { API_URL } from "@/lib/apiConfig";

export interface TripEnquiryRecord {
  _id: string;
  name: string;
  email: string;
  phone: string;
  where: string;
  when: string;
  message: string;
  path: string;
  referrer: string;
  browser: string;
  device: string;
  os: string;
  language: string;
  timezone: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
  isRead: boolean;
  createdAt: string;
}

export interface TripEnquiryListResult {
  enquiries: TripEnquiryRecord[];
  unreadCount: number;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export class TripEnquiryApiError extends Error {}

export async function listTripEnquiries(page: number, limit = 10): Promise<TripEnquiryListResult> {
  const response = await fetch(`${API_URL}/trip-enquiries?page=${page}&limit=${limit}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new TripEnquiryApiError(body?.message ?? `Request failed with status ${response.status}`);
  }

  const body = await response.json();
  return body.data as TripEnquiryListResult;
}

export async function getUnreadCount(): Promise<number> {
  const response = await fetch(`${API_URL}/trip-enquiries/unread-count`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new TripEnquiryApiError(body?.message ?? `Request failed with status ${response.status}`);
  }

  const body = await response.json();
  return (body.data?.unreadCount as number) ?? 0;
}

export async function markEnquiriesRead(ids: string[]): Promise<void> {
  if (ids.length === 0) return;

  const response = await fetch(`${API_URL}/trip-enquiries/mark-read`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ ids }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new TripEnquiryApiError(body?.message ?? `Request failed with status ${response.status}`);
  }
}

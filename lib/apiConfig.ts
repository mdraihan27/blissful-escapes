import { getToken } from "@/lib/authToken";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

/**
 * fetch wrapper that attaches the Bearer token (if present) to every request.
 * Pass a path relative to API_URL, e.g. apiFetch("/auth/me").
 */
export function apiFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getToken();
  const headers = new Headers(init.headers);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return fetch(`${API_URL}${path}`, { ...init, headers });
}

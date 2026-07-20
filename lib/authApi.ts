import { apiFetch } from "@/lib/apiConfig";
import { setToken, clearToken } from "@/lib/authToken";

export interface AdminUser {
  _id: string;
  userId: string;
  isActive: boolean;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export class AuthApiError extends Error {}

async function parseJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function login(userId: string, password: string): Promise<AdminUser> {
  const response = await apiFetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, password }),
  });

  const body = await parseJson(response);

  if (!response.ok) {
    throw new AuthApiError(body?.message ?? "Unable to sign in. Please try again.");
  }

  if (body?.data?.accessToken) {
    setToken(body.data.accessToken);
  }

  return body.data.user as AdminUser;
}

export async function requestLoginLink(userId: string): Promise<void> {
  const response = await apiFetch("/auth/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });

  const body = await parseJson(response);

  if (!response.ok) {
    throw new AuthApiError(body?.message ?? "Unable to send login link. Please try again.");
  }
}

export async function loginWithToken(token: string): Promise<AdminUser> {
  const response = await apiFetch("/auth/magic-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  const body = await parseJson(response);

  if (!response.ok) {
    throw new AuthApiError(body?.message ?? "This login link is invalid or has expired.");
  }

  if (body?.data?.accessToken) {
    setToken(body.data.accessToken);
  }

  return body.data.user as AdminUser;
}

export async function logout(): Promise<void> {
  try {
    await apiFetch("/auth/logout", { method: "POST" });
  } finally {
    // Always clear locally, even if the network call fails.
    clearToken();
  }
}

export async function getCurrentUser(): Promise<AdminUser | null> {
  const response = await apiFetch("/auth/me", { method: "GET" });

  if (!response.ok) return null;

  const body = await parseJson(response);
  return (body?.data?.user as AdminUser) ?? null;
}

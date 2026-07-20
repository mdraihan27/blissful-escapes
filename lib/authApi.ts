import { API_URL } from "@/lib/apiConfig";

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
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ userId, password }),
  });

  const body = await parseJson(response);

  if (!response.ok) {
    throw new AuthApiError(body?.message ?? "Unable to sign in. Please try again.");
  }

  return body.data.user as AdminUser;
}

export async function requestLoginLink(userId: string): Promise<void> {
  const response = await fetch(`${API_URL}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ userId }),
  });

  const body = await parseJson(response);

  if (!response.ok) {
    throw new AuthApiError(body?.message ?? "Unable to send login link. Please try again.");
  }
}

export async function loginWithToken(token: string): Promise<AdminUser> {
  const response = await fetch(`${API_URL}/auth/magic-login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ token }),
  });

  const body = await parseJson(response);

  if (!response.ok) {
    throw new AuthApiError(body?.message ?? "This login link is invalid or has expired.");
  }

  return body.data.user as AdminUser;
}

export async function logout(): Promise<void> {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function getCurrentUser(): Promise<AdminUser | null> {
  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) return null;

  const body = await parseJson(response);
  return (body?.data?.user as AdminUser) ?? null;
}

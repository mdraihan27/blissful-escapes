import { apiFetch } from "@/lib/apiConfig";

export interface AdminUserRecord {
  _id: string;
  userId: string;
  isActive: boolean;
  lastLoginAt: string | null;
  createdBy: string | null;
  createdAt: string;
}

export class UsersApiError extends Error {}

async function parseJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function listUsers(): Promise<AdminUserRecord[]> {
  const response = await apiFetch("/users", { method: "GET" });

  const body = await parseJson(response);
  if (!response.ok) {
    throw new UsersApiError(body?.message ?? `Request failed with status ${response.status}`);
  }

  return (body.data?.users as AdminUserRecord[]) ?? [];
}

export async function createUser(userId: string, password: string): Promise<AdminUserRecord> {
  const response = await apiFetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, password }),
  });

  const body = await parseJson(response);
  if (!response.ok) {
    throw new UsersApiError(body?.message ?? `Request failed with status ${response.status}`);
  }

  return body.data.user as AdminUserRecord;
}

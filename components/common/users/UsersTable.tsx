import type { AdminUserRecord } from "@/lib/usersAdminApi";

interface UsersTableProps {
  users: AdminUserRecord[];
  currentUserId: string | null;
  isLoading: boolean;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function createdByLabel(createdBy: string | null) {
  return createdBy ?? "System";
}

export function UsersTable({ users, currentUserId, isLoading }: Readonly<UsersTableProps>) {
  if (!isLoading && users.length === 0) {
    return (
      <div className="rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] p-10 text-center shadow-lg shadow-primary-brown/10">
        <p className="text-sm text-primary-brown/75">No users yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-primary-brown/20 bg-primary-brown/[0.035] shadow-lg shadow-primary-brown/10">
      {/* Desktop table */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-primary-brown/20 bg-primary-brown/5 text-xs uppercase tracking-[0.12em] text-primary-brown/75">
              <th className="px-5 py-3.5 font-semibold">User ID</th>
              <th className="px-5 py-3.5 font-semibold">Created</th>
              <th className="px-5 py-3.5 font-semibold">Last access</th>
              <th className="px-5 py-3.5 font-semibold">Created by</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b border-primary-brown/18 last:border-b-0">
                <td className="px-5 py-4">
                  <span className="font-semibold text-primary-brown">{user.userId}</span>
                  {currentUserId === user.userId && (
                    <span className="ml-2 rounded-full bg-primary-beige/40 px-2 py-0.5 text-xs font-semibold text-primary-brown">
                      You
                    </span>
                  )}
                </td>
                <td className="px-5 py-4 text-primary-brown/70">{formatDate(user.createdAt)}</td>
                <td className="px-5 py-4 text-primary-brown/70">
                  {user.lastLoginAt ? formatDateTime(user.lastLoginAt) : "Never signed in"}
                </td>
                <td className="px-5 py-4 text-primary-brown/70">{createdByLabel(user.createdBy)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="flex flex-col sm:hidden">
        {users.map((user) => (
          <div key={user._id} className="border-b border-primary-brown/18 p-4 last:border-b-0">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-primary-brown">{user.userId}</span>
              {currentUserId === user.userId && (
                <span className="rounded-full bg-primary-beige/40 px-2 py-0.5 text-xs font-semibold text-primary-brown">
                  You
                </span>
              )}
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-brown/70">Created</dt>
                <dd className="mt-0.5 text-primary-brown/70">{formatDate(user.createdAt)}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-brown/70">Created by</dt>
                <dd className="mt-0.5 text-primary-brown/70">{createdByLabel(user.createdBy)}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-brown/70">Last access</dt>
                <dd className="mt-0.5 text-primary-brown/70">
                  {user.lastLoginAt ? formatDateTime(user.lastLoginAt) : "Never signed in"}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

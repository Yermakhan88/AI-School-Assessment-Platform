"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/shared/providers/AuthProvider";

interface Props {
  children: ReactNode;
  roles: Array<"teacher" | "student" | "admin">;
}

export default function RoleGuard({
  children,
  roles,
}: Props) {
  const router = useRouter();

  const { user, loading } = useCurrentUser();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    router.replace("/auth/login");
    return null;
  }

  if (!roles.includes(user.role)) {
    router.replace("/");
    return null;
  }

  return <>{children}</>;
}
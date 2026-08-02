"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface WorkspaceCardProps {
  title: string;
  description: string;
  value: string;
  href: string;
  icon: ReactNode;
}

export default function WorkspaceCard({
  title,
  description,
  value,
  href,
  icon,
}: WorkspaceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-slate-500">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="text-3xl font-bold text-slate-900">
          {value}
        </span>

        <span className="font-semibold text-blue-600 transition group-hover:translate-x-1">
          Open →
        </span>

      </div>
    </Link>
  );
}
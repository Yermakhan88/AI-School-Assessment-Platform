"use client";

import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </h2>

        </div>

        <div className="rounded-xl bg-blue-50 p-4 text-blue-600">
          {icon}
        </div>

      </div>

    </div>
  );
}
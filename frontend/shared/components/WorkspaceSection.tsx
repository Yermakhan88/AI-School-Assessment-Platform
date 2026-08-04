"use client";

import { ReactNode } from "react";

interface WorkspaceSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function WorkspaceSection({
  title,
  description,
  children,
}: WorkspaceSectionProps) {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-slate-500">
            {description}
          </p>
        )}

      </div>

      {children}

    </section>
  );
}
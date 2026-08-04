"use client";

import { ReactNode } from "react";

interface WorkspaceHeaderProps {
  title: string;
  description: string;
  actions?: ReactNode;
}

export default function WorkspaceHeader({
  title,
  description,
  actions,
}: WorkspaceHeaderProps) {
  return (
    <div className="mb-8 flex items-start justify-between">

      <div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-slate-500">
          {description}
        </p>

      </div>

      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}

    </div>
  );
}
"use client";

import { BookOpen, ClipboardCheck } from "lucide-react";

import WorkspaceCard from "./WorkspaceCard";

export default function TeacherWorkspaceHome() {
  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-slate-900">
          Good Morning 👋
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          What would you like to do today?
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <WorkspaceCard
          title="Assignment Management"
          description="Create, edit and publish learning activities."
          value="7 Active"
          href="/dashboard/teacher/assignments"
          icon={<BookOpen size={28} />}
        />

        <WorkspaceCard
          title="Assignment Review"
          description="Review submitted student work."
          value="12 Waiting"
          href="/dashboard/teacher/review"
          icon={<ClipboardCheck size={28} />}
        />

      </div>

    </div>
  );
}
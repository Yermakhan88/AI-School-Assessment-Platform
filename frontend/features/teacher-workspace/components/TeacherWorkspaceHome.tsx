"use client";

import DashboardCards from "@/features/dashboard/components/DashboardCards";

import WorkspaceCard from "./WorkspaceCard";

import {
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

export default function TeacherWorkspaceHome() {
  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Good Morning 👋
        </h1>

        <p className="mt-2 text-slate-500">
          What would you like to do today?
        </p>

      </div>

      <DashboardCards />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <WorkspaceCard
          title="Assignment Management"
          description="Create, edit and publish learning activities."
          value="Open →"
          href="/dashboard/teacher/assignments"
          icon={<BookOpen size={28} />}
        />

        <WorkspaceCard
          title="Submission Review"
          description="Review submitted student work."
          value="Open →"
          href="/dashboard/teacher/review"
          icon={<ClipboardCheck size={28} />}
        />

      </div>

    </div>
  );
}
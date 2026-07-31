"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";

export default function StudentDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <PageHeader
          title="Student Dashboard"
          description="Welcome to AI School Assessment Platform"
        />

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold">
              📚 My Assignments
            </h2>

            <p className="mt-2 text-slate-500">
              View assignments and submit homework.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold">
              📤 My Submissions
            </h2>

            <p className="mt-2 text-slate-500">
              View uploaded homework.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-lg font-semibold">
              🤖 AI Feedback
            </h2>

            <p className="mt-2 text-slate-500">
              Review AI assessment results.
            </p>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
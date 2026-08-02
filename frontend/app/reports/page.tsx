"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingState from "@/components/common/LoadingState";

import { useReports } from "@/features/reports/hooks/useReports";

export default function ReportsPage() {
  const {
    statistics,
    loading,
  } = useReports();

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingState
          message="Loading reports..."
        />
      </DashboardLayout>
    );
  }

  if (!statistics) {
    return (
      <DashboardLayout>
        <h1 className="text-3xl font-bold">
          Reports
        </h1>

        <p className="mt-4 text-red-500">
          Failed to load report statistics.
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            Reports
          </h1>

          <p className="mt-2 text-slate-500">
            Project statistics and exports
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              👨‍🏫 Teachers
            </div>

            <div className="mt-2 text-3xl font-bold">
              {statistics.teachers}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              👨‍🎓 Students
            </div>

            <div className="mt-2 text-3xl font-bold">
              {statistics.students}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              📝 Assignments
            </div>

            <div className="mt-2 text-3xl font-bold">
              {statistics.assignments}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              📄 Submissions
            </div>

            <div className="mt-2 text-3xl font-bold">
              {statistics.submissions}
            </div>
          </div>

        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <h2 className="mb-6 text-xl font-semibold">
            Export Reports
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <a
              href="http://127.0.0.1:8000/api/reports/teacher/pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white hover:bg-blue-700"
            >
              📄 Export Teacher Report (PDF)
            </a>

            <button className="rounded-lg bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700">
              📊 Export Student Report (Excel)
            </button>

            <button className="rounded-lg bg-purple-600 px-4 py-3 font-medium text-white hover:bg-purple-700">
              🤖 Export AI Report
            </button>

            <button className="rounded-lg bg-orange-600 px-4 py-3 font-medium text-white hover:bg-orange-700">
              📈 Export Statistics
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
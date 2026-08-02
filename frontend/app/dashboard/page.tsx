"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingState from "@/components/common/LoadingState";

import DashboardCards from "@/features/dashboard/components/DashboardCards";
import { useDashboard } from "@/features/dashboard/hooks/useDashboard";

export default function DashboardPage() {
  const {
    stats,
    loading,
  } = useDashboard();

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingState
          message="Loading dashboard..."
        />
      </DashboardLayout>
    );
  }

  if (!stats) {
    return (
      <DashboardLayout>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-red-500">
          Failed to load dashboard statistics.
        </p>

      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            AI School Assessment Platform
          </p>

        </div>

        <DashboardCards
          stats={stats}
        />

      </div>

    </DashboardLayout>
  );
}
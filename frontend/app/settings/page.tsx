"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingState from "@/components/common/LoadingState";

import { useSettings } from "@/features/settings/hooks/useSettings";

export default function SettingsPage() {
  const {
    settings,
    loading,
  } = useSettings();

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingState
          message="Loading settings..."
        />
      </DashboardLayout>
    );
  }

  if (!settings) {
    return (
      <DashboardLayout>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-4 text-red-500">
          Failed to load settings.
        </p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            ⚙️ Settings
          </h1>

          <p className="mt-2 text-slate-500">
            System configuration
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              🏫 School Name
            </div>

            <div className="mt-2 text-xl font-semibold">
              {settings.school_name}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              🤖 OpenAI Model
            </div>

            <div className="mt-2 text-xl font-semibold">
              {settings.openai_model}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              🟢 API Status
            </div>

            <div className="mt-2 text-xl font-semibold text-green-600">
              {settings.api_status}
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-500">
              📦 Version
            </div>

            <div className="mt-2 text-xl font-semibold">
              {settings.version}
            </div>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
"use client";

import { Card } from "@/components/ui/card";

export default function ProgrammingSettingsCard() {
  return (
    <Card className="rounded-2xl p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Programming Settings
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <InfoCard
          title="Language"
          value="Python"
        />

        <InfoCard
          title="Difficulty"
          value="Medium"
        />

        <InfoCard
          title="Maximum Score"
          value="100"
        />

        <InfoCard
          title="Deadline"
          value="10 Sep 2026"
        />

      </div>

    </Card>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>

    </div>
  );
}
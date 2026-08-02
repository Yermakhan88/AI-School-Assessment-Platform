"use client";

import DescriptionCard from "./DescriptionCard";
import ProgrammingSettingsCard from "./ProgrammingSettingsCard";
import PublishingCard from "./PublishingCard";

export default function AssignmentCanvas() {
  return (
    <div className="h-full overflow-auto bg-slate-50 p-6">

      <div className="mx-auto max-w-4xl space-y-6">

        <DescriptionCard />

        <ProgrammingSettingsCard />

        <PublishingCard />

      </div>

    </div>
  );
}
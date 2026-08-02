"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ProgrammingSettingsCard() {
  return (
    <Card className="rounded-2xl p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Programming Settings
      </h2>

      <div className="grid gap-4">

        <Input placeholder="Programming Language" />

        <Input placeholder="Maximum Score" />

        <Input placeholder="Difficulty" />

      </div>

    </Card>
  );
}
"use client";

import { Card } from "@/components/ui/card";

export default function DescriptionCard() {
  return (
    <Card className="rounded-2xl p-6">

      <h2 className="mb-4 text-xl font-semibold">
        Description
      </h2>

      <textarea
        placeholder="Write assignment description..."
        className="min-h-[180px] w-full rounded-xl border p-4 outline-none"
      />

    </Card>
  );
}
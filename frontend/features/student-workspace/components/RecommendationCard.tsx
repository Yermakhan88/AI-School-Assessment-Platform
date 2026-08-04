"use client";

import { Sparkles } from "lucide-react";

export default function RecommendationCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <Sparkles className="text-blue-600" />

        <h2 className="text-xl font-bold">
          AI Recommendation
        </h2>

      </div>

      <p className="mt-5 text-slate-500">
        After submitting your assignment,
        AI will recommend the next learning topic.
      </p>

    </div>
  );
}
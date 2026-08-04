"use client";

import { CheckCircle2, AlertTriangle } from "lucide-react";

import WorkspaceSection from "@/shared/components/WorkspaceSection";
import MetricCard from "@/shared/components/MetricCard";

export default function AIRecommendation() {
  return (
    <WorkspaceSection
      title="AI Recommendation"
      description="AI analysis of the submitted assignment."
    >
      <MetricCard
        title="Overall Score"
        value="91%"
      />

      <div className="mt-8">

        <h3 className="font-semibold">
          Strengths
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Correct algorithm</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Good naming</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span>Clean code</span>
          </div>

        </div>

      </div>

      <div className="mt-8">

        <h3 className="font-semibold">
          Needs Improvement
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <span>Add comments</span>
          </div>

          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <span>Error handling</span>
          </div>

        </div>

      </div>

    </WorkspaceSection>
  );
}
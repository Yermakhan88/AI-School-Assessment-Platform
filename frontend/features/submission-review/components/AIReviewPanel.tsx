"use client";

import { Sparkles, Clock } from "lucide-react";

import WorkspaceSection from "@/shared/components/WorkspaceSection";
import MetricCard from "@/shared/components/MetricCard";
import { Button } from "@/components/ui/button";

import { Submission } from "../types/submission.types";
import { useAIReview } from "../hooks/useAIReview";

interface Props {
  submission?: Submission;
}

export default function AIReviewPanel({
  submission,
}: Props) {
  const {
    review,
    loading,
    analyze,
  } = useAIReview();

  if (!submission) return null;

  return (
    <WorkspaceSection
      title="AI Review"
      description="GPT-4.1 analysis"
    >
      {!review ? (
        <Button
          className="w-full"
          disabled={loading}
          onClick={() =>
            analyze(submission.id)
          }
        >
          <Sparkles className="mr-2 h-4 w-4" />

          {loading
            ? "Analyzing..."
            : "Analyze with AI"}
        </Button>
      ) : (
        <>

          <MetricCard
            title="AI Score"
            value={review.score.toString()}
          />

          <div className="mt-6 rounded-xl border bg-slate-50 p-4">

            <p className="text-sm text-slate-500">
              Grade
            </p>

            <p className="mt-2 text-2xl font-bold">
              {review.grade}
            </p>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold">
              Strengths
            </h3>

            <ul className="mt-3 space-y-2">

              {review.strengths.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-green-50 p-3 text-sm"
                  >
                    ✅ {item}
                  </li>
                )
              )}

            </ul>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold">
              Weaknesses
            </h3>

            <ul className="mt-3 space-y-2">

              {review.weaknesses.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-red-50 p-3 text-sm"
                  >
                    ⚠ {item}
                  </li>
                )
              )}

            </ul>

          </div>

          <div className="mt-6">

            <h3 className="font-semibold">
              Recommendations
            </h3>

            <ul className="mt-3 space-y-2">

              {review.recommendations.map(
                (item, index) => (
                  <li
                    key={index}
                    className="rounded-lg bg-blue-50 p-3 text-sm"
                  >
                    💡 {item}
                  </li>
                )
              )}

            </ul>

          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">

            <Clock className="h-4 w-4" />

            <span>

              {review.processing_time.toFixed(2)} sec

            </span>

          </div>

        </>
      )}
    </WorkspaceSection>
  );
}
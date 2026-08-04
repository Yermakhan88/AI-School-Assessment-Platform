"use client";

import { AIReview } from "../types";

interface Props {
  review: AIReview | null;
  loading: boolean;
}

export default function AIReviewCard({
  review,
  loading,
}: Props) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          🤖 AI Review
        </h2>

        <p className="text-slate-500">
          Analyzing submission...
        </p>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          🤖 AI Review
        </h2>

        <p className="text-slate-500">
          Select a submission and click
          <br />
          <strong>🤖 Analyze</strong>
        </p>
      </div>
    );
  }

  const strengths = review.strengths ?? [];
  const weaknesses = review.weaknesses ?? [];
  const recommendations = review.recommendations ?? [];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        🤖 AI Review
      </h2>

      <div className="space-y-5">

        <div>

          <div className="text-sm text-slate-500">
            Score
          </div>

          <div className="text-4xl font-bold">
            {review.score}/100
          </div>

        </div>

        {review.grade && (
          <div>

            <div className="text-sm text-slate-500">
              Grade
            </div>

            <div className="font-semibold text-lg">
              {review.grade}
            </div>

          </div>
        )}

        <div>

          <div className="text-sm text-slate-500">
            Summary
          </div>

          <p className="leading-7">
            {review.feedback}
          </p>

        </div>

        <div>

          <h3 className="font-semibold text-green-700">
            ✅ Strengths
          </h3>

          {strengths.length === 0 ? (
            <p className="text-slate-500">
              No strengths available.
            </p>
          ) : (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {strengths.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}

        </div>

        <div>

          <h3 className="font-semibold text-red-700">
            ⚠ Weaknesses
          </h3>

          {weaknesses.length === 0 ? (
            <p className="text-slate-500">
              No weaknesses available.
            </p>
          ) : (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {weaknesses.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}

        </div>

        <div>

          <h3 className="font-semibold text-amber-700">
            💡 Recommendations
          </h3>

          {recommendations.length === 0 ? (
            <p className="text-slate-500">
              No recommendations available.
            </p>
          ) : (
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {recommendations.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}

        </div>

        <div className="border-t pt-4 text-sm text-slate-500">

          <div>
            <strong>Model:</strong> {review.model}
          </div>

          <div>
            <strong>Processing time:</strong>{" "}
            {review.processing_time}s
          </div>

        </div>

      </div>

    </div>
  );
}
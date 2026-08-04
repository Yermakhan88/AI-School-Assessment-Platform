"use client";

import { AIReview } from "../types";

interface Props {
  review: AIReview | null;
  loading: boolean;
}

function ScoreBadge({ score }: { score: number }) {
  let bg = "bg-red-100 text-red-700";

  if (score >= 90) {
    bg = "bg-green-100 text-green-700";
  } else if (score >= 75) {
    bg = "bg-yellow-100 text-yellow-700";
  }

  return (
    <span
      className={`rounded-full px-4 py-2 text-xl font-bold ${bg}`}
    >
      {score}/100
    </span>
  );
}

export default function AIReviewPanel({
  review,
  loading,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        🤖 AI Review
      </h2>

      {loading && (
        <div className="space-y-3">

          <div className="h-6 w-40 animate-pulse rounded bg-slate-200" />

          <div className="h-24 animate-pulse rounded bg-slate-200" />

          <div className="h-24 animate-pulse rounded bg-slate-200" />

        </div>
      )}

      {!loading && !review && (
        <p className="text-slate-500">
          Select a submission and click
          <br />
          <strong>🤖 Analyze</strong>
        </p>
      )}

      {!loading && review && (

        <div className="space-y-6">

          <div className="flex items-center justify-between">

            <div>

              <div className="text-sm text-slate-500">
                Score
              </div>

              <ScoreBadge score={review.score} />

            </div>

            <div className="text-right">

              <div className="text-sm text-slate-500">
                Grade
              </div>

              <div className="text-lg font-semibold">
                {review.grade}
              </div>

            </div>

          </div>

          <div>

            <div className="mb-2 text-sm font-semibold">
              Summary
            </div>

            <p className="text-slate-700">
              {review.feedback}
            </p>

          </div>

          <div>

            <h3 className="mb-2 font-semibold text-green-700">
              ✅ Strengths
            </h3>

            <ul className="list-disc space-y-1 pl-5">

              {review.strengths.map((item) => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

          <div>

            <h3 className="mb-2 font-semibold text-orange-700">
              ⚠ Weaknesses
            </h3>

            <ul className="list-disc space-y-1 pl-5">

              {review.weaknesses.map((item) => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

          <div>

            <h3 className="mb-2 font-semibold text-blue-700">
              💡 Recommendations
            </h3>

            <ul className="list-disc space-y-1 pl-5">

              {review.recommendations.map((item) => (

                <li key={item}>
                  {item}
                </li>

              ))}

            </ul>

          </div>

          <div className="border-t pt-4 text-sm text-slate-500">

            <div>

              Model:

              <strong className="ml-2">
                {review.model}
              </strong>

            </div>

            <div>

              Processing:

              <strong className="ml-2">
                {review.processing_time}s
              </strong>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
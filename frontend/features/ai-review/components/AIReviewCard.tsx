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
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        🤖 AI Review
      </h2>

      {loading && (
        <p className="text-slate-500">
          Analyzing submission...
        </p>
      )}

      {!loading && !review && (
        <p className="text-slate-500">
          Select a submission and click
          <br />
          <strong>🤖 Analyze</strong>
        </p>
      )}

      {!loading && review && (
        <div className="space-y-5">

          <div>

            <div className="text-sm text-slate-500">
              Score
            </div>

            <div className="text-4xl font-bold">
              {review.score}/100
            </div>

          </div>

          <div>

            <div className="text-sm text-slate-500">
              Grade
            </div>

            <div className="font-semibold">
              {review.grade}
            </div>

          </div>

          <div>

            <div className="text-sm text-slate-500">
              Summary
            </div>

            <p>{review.feedback}</p>

          </div>

          <div>

            <h3 className="font-semibold">
              ✅ Strengths
            </h3>

            <ul className="list-disc pl-5">

              {review.strengths.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              ⚠ Weaknesses
            </h3>

            <ul className="list-disc pl-5">

              {review.weaknesses.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h3 className="font-semibold">
              💡 Recommendations
            </h3>

            <ul className="list-disc pl-5">

              {review.recommendations.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </div>

          <div className="border-t pt-4 text-sm text-slate-500">

            Model: {review.model}

            <br />

            Processing time: {review.processing_time}s

          </div>

        </div>
      )}

    </div>
  );
}
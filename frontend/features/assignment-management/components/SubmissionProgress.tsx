"use client";

interface SubmissionProgressProps {
  submitted: number;
  total: number;
}

export default function SubmissionProgress({
  submitted,
  total,
}: SubmissionProgressProps) {
  const progress =
    total === 0 ? 0 : Math.round((submitted / total) * 100);

  return (
    <div className="mt-5">

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          Submitted
        </span>

        <span className="text-sm font-semibold text-slate-700">
          {submitted} / {total}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}
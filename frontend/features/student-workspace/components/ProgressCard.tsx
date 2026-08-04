"use client";

import { StudentSubmission } from "../types/studentWorkspace.types";

interface Props {
  submission: StudentSubmission | null | undefined;
}

export default function ProgressCard({
  submission,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Progress
      </h2>

      {!submission ? (
        <p className="mt-4 text-slate-500">
          No submission yet.
        </p>
      ) : (
        <div className="mt-5 space-y-3">

          <div className="flex justify-between">
            <span>AI Score</span>
            <strong>
              {submission.ai_score ?? "-"}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Teacher Score</span>
            <strong>
              {submission.teacher_score ?? "-"}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Status</span>
            <strong>
              {submission.status}
            </strong>
          </div>

        </div>
      )}

    </div>
  );
}
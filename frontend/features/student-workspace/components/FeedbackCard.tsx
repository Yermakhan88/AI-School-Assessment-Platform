"use client";

import { StudentSubmission } from "../types/studentWorkspace.types";

interface Props {
  submission: StudentSubmission | null | undefined;
}

export default function FeedbackCard({
  submission,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Feedback
      </h2>

      {!submission ? (
        <p className="mt-5 text-slate-500">
          No feedback available.
        </p>
      ) : (
        <div className="space-y-6 mt-5">

          <div>

            <h3 className="font-semibold">
              AI Feedback
            </h3>

            <p className="mt-2 text-slate-500">
              {submission.ai_feedback ?? "-"}
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Teacher Feedback
            </h3>

            <p className="mt-2 text-slate-500">
              {submission.teacher_feedback ?? "-"}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}
"use client";

import { Submission } from "../types/submission.types";

interface Props {
  submission?: Submission;
}

export default function SubmissionPreview({
  submission,
}: Props) {
  if (!submission) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-slate-500">
          No submission selected
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-8">

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h1 className="text-3xl font-bold">
          {submission.assignment.title}
        </h1>

        <p className="mt-2 text-slate-500">
          {submission.student.full_name}
        </p>

      </div>

      <div className="rounded-2xl border bg-slate-900 p-6 shadow-sm">

        <div className="mb-4 flex items-center justify-between">

          <h2 className="font-semibold text-white">
            {submission.file_name}
          </h2>

        </div>

        <pre className="overflow-auto text-sm leading-7 text-green-400">
{`File Path:

${submission.file_path}

(Version 1.0)

File preview will be replaced
with Monaco Editor.`}
        </pre>

      </div>

    </div>
  );
}
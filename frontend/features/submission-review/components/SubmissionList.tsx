"use client";

import { Submission } from "../types/submission.types";

import SubmissionCard from "./SubmissionCard";

interface Props {
  submissions: Submission[];
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function SubmissionList({
  submissions,
  selectedId,
  onSelect,
}: Props) {
  return (
    <div className="flex h-full flex-col">

      <div className="border-b p-5">

        <h2 className="text-xl font-semibold">
          Submissions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {submissions.length} submissions
        </p>

      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-5">

        {submissions.map((submission) => (

          <SubmissionCard
            key={submission.id}
            submission={submission}
            active={submission.id === selectedId}
            onClick={() => onSelect(submission.id)}
          />

        ))}

      </div>

    </div>
  );
}
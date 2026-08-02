"use client";

import AssignmentStatusBadge from "./AssignmentStatusBadge";

import { Assignment } from "../types/assignment.types";

interface Props {
  assignment?: Assignment;
}

export default function AssignmentCanvas({
  assignment,
}: Props) {
  if (!assignment) {
    return (
      <div className="flex h-full items-center justify-center">

        <div className="text-center">

          <h2 className="text-2xl font-semibold text-slate-700">
            No Assignment Selected
          </h2>

          <p className="mt-3 text-slate-500">
            Select an assignment from the library to start editing.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-slate-50 p-8">

      {/* Header */}

      <div className="mb-8 rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              {assignment.title}
            </h1>

            <p className="mt-2 text-slate-500">
              {assignment.subject}
            </p>

          </div>

          <AssignmentStatusBadge
            status={assignment.status}
          />

        </div>

      </div>

      {/* Description */}

      <div className="mb-6 rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-xl font-semibold">
          Description
        </h2>

        <textarea
          defaultValue={assignment.description}
          className="min-h-[220px] w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-blue-500"
        />

      </div>

      {/* Programming Settings */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Programming Settings
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <InfoCard
            title="Programming Language"
            value={assignment.language}
          />

          <InfoCard
            title="Maximum Score"
            value={assignment.maxScore.toString()}
          />

          <InfoCard
            title="Group"
            value={assignment.group}
          />

          <InfoCard
            title="Deadline"
            value={assignment.deadline}
          />

        </div>

      </div>

    </div>
  );
}

interface InfoCardProps {
  title: string;
  value: string;
}

function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-800">
        {value}
      </p>

    </div>
  );
}
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

        <p className="text-slate-500">

          No assignment selected

        </p>

      </div>

    );

  }

  return (

    <div className="space-y-6 p-8">

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-4xl font-bold">

              {assignment.title}

            </h1>

            <p className="mt-2 text-slate-500">

              {assignment.subject.name}

            </p>

          </div>

          <AssignmentStatusBadge
            status={
              assignment.is_active
                ? "ACTIVE"
                : "ARCHIVED"
            }
          />

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-xl font-semibold">

          Description

        </h2>

        <textarea
          defaultValue={assignment.description}
          className="min-h-[220px] w-full rounded-xl border p-4"
        />

      </div>

      <div className="grid grid-cols-2 gap-4">

        <InfoCard
          title="Teacher"
          value={assignment.teacher.full_name}
        />

        <InfoCard
          title="Subject"
          value={assignment.subject.name}
        />

        <InfoCard
          title="Maximum Score"
          value={assignment.max_score.toString()}
        />

        <InfoCard
          title="Due Date"
          value={assignment.due_date}
        />

      </div>

    </div>

  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (

    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <p className="text-sm text-slate-500">

        {title}

      </p>

      <h3 className="mt-2 text-lg font-semibold">

        {value}

      </h3>

    </div>

  );

}
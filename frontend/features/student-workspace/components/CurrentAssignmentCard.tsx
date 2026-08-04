"use client";

import { Assignment } from "@/features/assignment-management/types/assignment.types";

interface Props {
  assignment: Assignment | null;
}

export default function CurrentAssignmentCard({
  assignment,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold">
        Current Assignment
      </h2>

      {!assignment ? (
        <p className="mt-4 text-slate-500">
          No active assignment.
        </p>
      ) : (
        <>
          <h3 className="mt-5 text-lg font-semibold">
            {assignment.title}
          </h3>

          <p className="mt-3 text-slate-500">
            {assignment.description}
          </p>

          <div className="mt-6 space-y-2 text-sm">

            <p>
              <strong>Subject:</strong>{" "}
              {assignment.subject.name}
            </p>

            <p>
              <strong>Teacher:</strong>{" "}
              {assignment.teacher.full_name}
            </p>

            <p>
              <strong>Due Date:</strong>{" "}
              {assignment.due_date}
            </p>

            <p>
              <strong>Maximum Score:</strong>{" "}
              {assignment.max_score}
            </p>

          </div>
        </>
      )}

    </div>
  );
}
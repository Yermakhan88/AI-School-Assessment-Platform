"use client";

import { StudentAssignment } from "../types/studentWorkspace.types";

interface Props {
  assignment: StudentAssignment | null | undefined;
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

          <div className="mt-6 text-sm">

            <p>
              Subject: {assignment.subject}
            </p>

            <p>
              Due: {assignment.due_date}
            </p>

          </div>

        </>
      )}

    </div>
  );
}
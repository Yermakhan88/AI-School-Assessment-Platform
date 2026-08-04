"use client";

import AssignmentCard from "./AssignmentCard";

import { Assignment } from "../types/assignment.types";

interface Props {
  assignments: Assignment[];
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function AssignmentLibrary({
  assignments,
  selectedId,
  onSelect,
}: Props) {
  return (
    <div className="flex h-full flex-col">

      <div className="border-b p-5">

        <h2 className="text-xl font-semibold">
          Assignment Library
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {assignments.length} assignments
        </p>

      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-5">

        {assignments.map((assignment) => (

          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            active={assignment.id === selectedId}
            onClick={() => onSelect(assignment.id)}
          />

        ))}

      </div>

    </div>
  );
}
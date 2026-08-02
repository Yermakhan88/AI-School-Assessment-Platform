"use client";

import { Input } from "@/components/ui/input";

import AssignmentCard from "./AssignmentCard";

import { Assignment } from "../types/assignment.types";

interface AssignmentLibraryProps {
  assignments: Assignment[];
  selectedId: number;
  onSelect: (id: number) => void;
}

export default function AssignmentLibrary({
  assignments,
  selectedId,
  onSelect,
}: AssignmentLibraryProps) {
  const activeAssignments = assignments.filter(
    (assignment) => assignment.status === "ACTIVE"
  );

  const draftAssignments = assignments.filter(
    (assignment) => assignment.status === "DRAFT"
  );

  const archivedAssignments = assignments.filter(
    (assignment) => assignment.status === "ARCHIVED"
  );

  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div className="border-b p-5">

        <h2 className="text-xl font-semibold">
          Assignment Library
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage learning activities
        </p>

        <Input
          className="mt-4"
          placeholder="Search assignment..."
        />

      </div>

      {/* Content */}

      <div className="flex-1 overflow-y-auto p-5">

        {/* Active */}

        <Section
          title="🟢 Active"
          count={activeAssignments.length}
        >

          {activeAssignments.map((assignment) => (

            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              active={assignment.id === selectedId}
              onClick={() => onSelect(assignment.id)}
            />

          ))}

        </Section>

        {/* Draft */}

        <Section
          title="🟡 Draft"
          count={draftAssignments.length}
        >

          {draftAssignments.map((assignment) => (

            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              active={assignment.id === selectedId}
              onClick={() => onSelect(assignment.id)}
            />

          ))}

        </Section>

        {/* Archived */}

        <Section
          title="⚪ Archived"
          count={archivedAssignments.length}
        >

          {archivedAssignments.map((assignment) => (

            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              active={assignment.id === selectedId}
              onClick={() => onSelect(assignment.id)}
            />

          ))}

        </Section>

      </div>

    </div>
  );
}

interface SectionProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

function Section({
  title,
  count,
  children,
}: SectionProps) {
  return (
    <section className="mb-8">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          {title}
        </h3>

        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium">
          {count}
        </span>

      </div>

      <div className="space-y-3">

        {children}

      </div>

    </section>
  );
}
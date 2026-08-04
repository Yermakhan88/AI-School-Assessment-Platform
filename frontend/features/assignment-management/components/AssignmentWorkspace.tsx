"use client";

import AssignmentAssistant from "./AssignmentAssistant";
import AssignmentCanvas from "./AssignmentCanvas";
import AssignmentLibrary from "./AssignmentLibrary";
import AssignmentToolbar from "./AssignmentToolbar";

import { useAssignments } from "../hooks/useAssignments";

export default function AssignmentWorkspace() {
  const {
    assignments,
    selectedAssignment,
    setSelectedAssignment,
    loading,
    error,
  } = useAssignments();

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-170px)] items-center justify-center">
        <p className="text-slate-500 text-lg">
          Loading assignments...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-170px)] items-center justify-center">
        <p className="text-red-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-170px)] flex-col gap-6">

      <AssignmentToolbar />

      <div className="flex flex-1 gap-6 overflow-hidden">

        <aside className="w-80 flex-shrink-0 rounded-2xl border bg-white shadow-sm">

          <AssignmentLibrary
            assignments={assignments}
            selectedId={selectedAssignment?.id ?? 0}
            onSelect={(id) => {
              const assignment = assignments.find(
                (item) => item.id === id
              );

              if (assignment) {
                setSelectedAssignment(assignment);
              }
            }}
          />

        </aside>

        <main className="flex-1 overflow-auto rounded-2xl border bg-slate-50 shadow-sm">

          <AssignmentCanvas
            assignment={selectedAssignment ?? undefined}
          />

        </main>

        <aside className="w-72 flex-shrink-0 rounded-2xl border bg-white shadow-sm">

          <AssignmentAssistant
            assignment={selectedAssignment ?? undefined}
          />

        </aside>

      </div>

    </div>
  );
}
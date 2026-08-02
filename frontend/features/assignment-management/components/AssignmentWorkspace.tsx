"use client";

import AssignmentAssistant from "./AssignmentAssistant";
import AssignmentCanvas from "./AssignmentCanvas";
import AssignmentLibrary from "./AssignmentLibrary";
import AssignmentToolbar from "./AssignmentToolbar";

import { useAssignmentWorkspace } from "../hooks/useAssignmentWorkspace";

export default function AssignmentWorkspace() {
  const {
    assignments,
    selectedAssignment,
    selectedAssignmentId,
    setSelectedAssignmentId,
  } = useAssignmentWorkspace();

  return (
    <div className="flex h-[calc(100vh-170px)] flex-col gap-6">

      {/* Toolbar */}

      <AssignmentToolbar />

      {/* Workspace */}

      <div className="flex flex-1 gap-6 overflow-hidden">

        {/* Library */}

        <aside className="w-80 flex-shrink-0 rounded-2xl border bg-white shadow-sm">

          <AssignmentLibrary
            assignments={assignments}
            selectedId={selectedAssignmentId}
            onSelect={setSelectedAssignmentId}
          />

        </aside>

        {/* Canvas */}

        <main className="flex-1 min-w-0 overflow-auto rounded-2xl border bg-slate-50 shadow-sm">

          <AssignmentCanvas
            assignment={selectedAssignment}
          />

        </main>

        {/* AI */}

        <aside className="w-72 flex-shrink-0 rounded-2xl border bg-white shadow-sm">

          <AssignmentAssistant
            assignment={selectedAssignment}
          />

        </aside>

      </div>

    </div>
  );
}
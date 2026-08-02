"use client";

import AssignmentToolbar from "./AssignmentToolbar";
import AssignmentLibrary from "./AssignmentLibrary";
import AssignmentCanvas from "./AssignmentCanvas";
import AssignmentAssistant from "./AssignmentAssistant";

export default function AssignmentWorkspace() {
  return (
    <div className="flex h-[calc(100vh-180px)] flex-col gap-6">

      {/* Top Toolbar */}

      <AssignmentToolbar />

      {/* Workspace */}

      <div className="grid flex-1 grid-cols-12 gap-6 overflow-hidden">

        {/* Library */}

        <aside className="col-span-3 overflow-hidden rounded-2xl border bg-white shadow-sm">

          <AssignmentLibrary />

        </aside>

        {/* Canvas */}

        <main className="col-span-6 overflow-auto rounded-2xl border bg-white shadow-sm">

          <AssignmentCanvas />

        </main>

        {/* AI Assistant */}

        <aside className="col-span-3 overflow-hidden rounded-2xl border bg-white shadow-sm">

          <AssignmentAssistant />

        </aside>

      </div>

    </div>
  );
}
"use client";

import ReviewToolbar from "./ReviewToolbar";
import StudentList from "./StudentList";
import SubmissionPreview from "./SubmissionPreview";
import AIRecommendation from "./AIRecommendation";
import TeacherEvaluation from "./TeacherEvaluation";

export default function AssignmentReviewWorkspace() {
  return (
    <div className="flex h-[calc(100vh-170px)] flex-col gap-6">

      {/* Toolbar */}

      <ReviewToolbar />

      {/* Workspace */}

      <div className="flex flex-1 gap-6 overflow-hidden">

        {/* Students */}

        <aside className="w-80 flex-shrink-0 rounded-2xl border bg-white shadow-sm">

          <StudentList />

        </aside>

        {/* Submission */}

        <main className="flex-1 min-w-0 overflow-auto rounded-2xl border bg-slate-50 shadow-sm">

          <SubmissionPreview />

        </main>

        {/* Right Panel */}

        <aside className="w-96 flex-shrink-0 space-y-6 overflow-auto">

          <AIRecommendation />

          <TeacherEvaluation />

        </aside>

      </div>

    </div>
  );
}
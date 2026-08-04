"use client";

import AIReviewPanel from "./AIReviewPanel";
import SubmissionList from "./SubmissionList";
import SubmissionPreview from "./SubmissionPreview";
import SubmissionToolbar from "./SubmissionToolbar";
import TeacherReviewPanel from "./TeacherReviewPanel";

import { useSubmissions } from "../hooks/useSubmissions";

export default function SubmissionWorkspace() {
  const {
    submissions,
    selectedSubmission,
    setSelectedSubmission,
    loading,
    error,
  } = useSubmissions();

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-170px)] items-center justify-center">
        <p className="text-lg text-slate-500">
          Loading submissions...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[calc(100vh-170px)] items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-170px)] flex-col gap-6">

      <SubmissionToolbar />

      <div className="flex flex-1 gap-6 overflow-hidden">

        <aside className="w-80 flex-shrink-0 rounded-2xl border bg-white shadow-sm">

          <SubmissionList
            submissions={submissions}
            selectedId={selectedSubmission?.id ?? 0}
            onSelect={(id) => {
              const submission = submissions.find(
                (item) => item.id === id
              );

              if (submission) {
                setSelectedSubmission(submission);
              }
            }}
          />

        </aside>

        <main className="flex-1 overflow-auto rounded-2xl border bg-slate-50 shadow-sm">

          <SubmissionPreview
            submission={selectedSubmission ?? undefined}
          />

        </main>

        <aside className="w-80 flex-shrink-0 space-y-6 overflow-auto">

          <AIReviewPanel
            submission={selectedSubmission ?? undefined}
          />

          <TeacherReviewPanel
            submission={selectedSubmission ?? undefined}
          />

        </aside>

      </div>

    </div>
  );
}
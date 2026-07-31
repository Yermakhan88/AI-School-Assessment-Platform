"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";

import { useAssignments } from "@/features/assignments/hooks/useAssignments";
import UploadHomeworkDialog from "@/features/submissions/components/UploadHomeworkDialog";
import { useSubmissions } from "@/features/submissions/hooks/useSubmissions";

import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

export default function StudentAssignmentsPage() {
  const {
    assignments,
    loading,
  } = useAssignments();

  const {
    uploadSubmission,
  } = useSubmissions();

  // Пока временно.
  // После завершения Authentication
  // будет использоваться currentUser.id
  const studentId = 1;

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingState message="Loading assignments..." />
      </DashboardLayout>
    );
  }

  if (assignments.length === 0) {
    return (
      <DashboardLayout>
        <EmptyState title="No assignments available" />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <PageHeader
          title="My Assignments"
          description="Complete your homework before the deadline."
        />

        <div className="grid gap-6">

          {assignments.map((assignment) => (

            <div
              key={assignment.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-xl font-semibold">
                    {assignment.title}
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Due: {assignment.due_date}
                  </p>

                  <p className="text-slate-500">
                    Max score: {assignment.max_score}
                  </p>

                </div>

                <UploadHomeworkDialog
                  assignmentId={assignment.id}
                  studentId={studentId}
                  onUpload={uploadSubmission}
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}
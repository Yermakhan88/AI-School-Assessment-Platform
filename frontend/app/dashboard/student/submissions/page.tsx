"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";

import { useSubmissions } from "@/features/submissions/hooks/useSubmissions";

import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

export default function StudentSubmissionsPage() {
  const {
    submissions,
    loading,
  } = useSubmissions();

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingState message="Loading submissions..." />
      </DashboardLayout>
    );
  }

  if (submissions.length === 0) {
    return (
      <DashboardLayout>
        <EmptyState title="No submissions yet" />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <PageHeader
          title="My Submissions"
          description="Track all uploaded homework."
        />

        <div className="rounded-xl border bg-white shadow-sm overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">
                  Assignment
                </th>

                <th className="p-4 text-left">
                  Uploaded
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  AI Score
                </th>

                <th className="p-4 text-left">
                  Teacher Score
                </th>

              </tr>

            </thead>

            <tbody>

              {submissions.map((submission) => (

                <tr
                  key={submission.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4">
                    {submission.file_name}
                  </td>

                  <td className="p-4">
                    {new Date(
                      submission.submitted_at
                    ).toLocaleString()}
                  </td>

                  <td className="p-4">

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">

                      {submission.status}

                    </span>

                  </td>

                  <td className="p-4">

                    {submission.ai_score ?? "-"}

                  </td>

                  <td className="p-4">

                    {submission.teacher_score ?? "-"}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}
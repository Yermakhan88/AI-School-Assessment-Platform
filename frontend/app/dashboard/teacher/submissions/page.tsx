"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";

import { useSubmissions } from "@/features/submissions/hooks/useSubmissions";

import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

export default function TeacherSubmissionsPage() {
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
        <EmptyState title="No submissions found" />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <PageHeader
          title="Student Submissions"
          description="Review uploaded homework."
        />

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">
                  Student ID
                </th>

                <th className="p-4 text-left">
                  Assignment ID
                </th>

                <th className="p-4 text-left">
                  File
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

                <th className="p-4 text-center">
                  Download
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
                    {submission.student_id}
                  </td>

                  <td className="p-4">
                    {submission.assignment_id}
                  </td>

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

                  <td className="p-4 text-center">

                    <a
                      href={`http://127.0.0.1:8000/${submission.file_path}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                    >
                      Download
                    </a>

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
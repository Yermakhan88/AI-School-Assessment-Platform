"use client";

interface Submission {
  id: number;
  assignment_id: number;
  student_id: number;
  file_name: string;
  file_path: string;
  submitted_at: string;
  status: string;
  ai_score: number | null;
  teacher_score: number | null;
}

interface Props {
  submissions: Submission[];

  loading: boolean;

  selectedSubmissionId: number | null;

  onAnalyze: (submission: Submission) => void;
}

function StatusBadge({
  status,
}: {
  status: string;
}) {
  switch (status) {
    case "UPLOADED":
      return (
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          🟡 Uploaded
        </span>
      );

    case "AI_REVIEWED":
      return (
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          🔵 AI Reviewed
        </span>
      );

    case "TEACHER_REVIEWED":
      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          🟢 Reviewed
        </span>
      );

    case "PUBLISHED":
      return (
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
          🟣 Published
        </span>
      );

    default:
      return (
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
          {status}
        </span>
      );
  }
}

export default function SubmissionTable({
  submissions,
  loading,
  selectedSubmissionId,
  onAnalyze,
}: Props) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left">
                Student
              </th>

              <th className="px-5 py-4 text-left">
                Assignment
              </th>

              <th className="px-5 py-4 text-left">
                File
              </th>

              <th className="px-5 py-4 text-left">
                Uploaded
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                AI
              </th>

              <th className="px-5 py-4 text-center">
                Teacher
              </th>

              <th className="px-5 py-4 text-center">
                Download
              </th>

              <th className="px-5 py-4 text-center">
                Analyze
              </th>

            </tr>

          </thead>

          <tbody>

            {submissions.map((submission) => {

              const selected =
                submission.id === selectedSubmissionId;

              return (

                <tr
                  key={submission.id}
                  className={`border-t transition ${
                    selected
                      ? "bg-emerald-50"
                      : "hover:bg-slate-50"
                  }`}
                >

                  <td className="px-5 py-4">
                    {submission.student_id}
                  </td>

                  <td className="px-5 py-4">
                    {submission.assignment_id}
                  </td>

                  <td className="px-5 py-4">
                    {submission.file_name}
                  </td>

                  <td className="px-5 py-4 whitespace-nowrap">
                    {new Date(
                      submission.submitted_at
                    ).toLocaleString()}
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge
                      status={submission.status}
                    />
                  </td>

                  <td className="px-5 py-4 text-center font-semibold">

                    {submission.ai_score ?? "-"}

                  </td>

                  <td className="px-5 py-4 text-center font-semibold">

                    {submission.teacher_score ?? "-"}

                  </td>

                  <td className="px-5 py-4 text-center">

                    <a
                      href={`http://127.0.0.1:8000/${submission.file_path}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                    >
                      Download
                    </a>

                  </td>

                  <td className="px-5 py-4 text-center">

                    <button
                      onClick={() =>
                        onAnalyze(submission)
                      }
                      className="rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition hover:bg-emerald-700"
                    >
                      🤖 Analyze
                    </button>

                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}
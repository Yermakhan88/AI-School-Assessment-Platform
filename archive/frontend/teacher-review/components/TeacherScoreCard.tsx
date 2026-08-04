"use client";

interface Props {
  aiScore: number | null;

  teacherScore: number | null;

  teacherFeedback: string;

  onTeacherScoreChange: (value: number) => void;

  onTeacherFeedbackChange: (value: string) => void;
}

export default function TeacherScoreCard({
  aiScore,
  teacherScore,
  teacherFeedback,
  onTeacherScoreChange,
  onTeacherFeedbackChange,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        👨‍🏫 Teacher Review
      </h2>

      <div className="space-y-6">

        <div>

          <div className="mb-2 text-sm text-slate-500">
            AI Score
          </div>

          <div className="text-4xl font-bold">

            {aiScore ?? "-"}

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-500">
            Teacher Score
          </label>

          <input
            type="number"
            min={0}
            max={100}
            value={teacherScore ?? ""}
            onChange={(e) =>
              onTeacherScoreChange(
                Number(e.target.value)
              )
            }
            className="w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-500">
            Teacher Feedback
          </label>

          <textarea
            rows={4}
            value={teacherFeedback}
            onChange={(e) =>
              onTeacherFeedbackChange(
                e.target.value
              )
            }
            placeholder="Enter teacher comments..."
            className="w-full rounded-lg border p-3 resize-none"
          />

        </div>

      </div>

    </div>
  );
}
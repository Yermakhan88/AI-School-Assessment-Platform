"use client";

interface Props {
  aiScore: number | null;

  teacherScore: number | null;

  onTeacherScoreChange: (value: number) => void;
}

export default function TeacherScoreCard({
  aiScore,
  teacherScore,
  onTeacherScoreChange,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        👨‍🏫 Teacher Review
      </h2>

      <div className="space-y-5">

        <div>

          <div className="text-sm text-slate-500">
            AI Score
          </div>

          <div className="text-3xl font-bold">
            {aiScore ?? "-"}
          </div>

        </div>

        <div>

          <div className="text-sm text-slate-500">
            Teacher Score
          </div>

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
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

      </div>

    </div>
  );
}
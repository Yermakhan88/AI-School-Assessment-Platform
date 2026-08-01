"use client";

import TeacherScoreCard from "./TeacherScoreCard";
import TeacherReviewActions from "./TeacherReviewActions";

interface Props {
  aiScore: number | null;

  teacherScore: number | null;

  loading: boolean;

  onTeacherScoreChange: (value: number) => void;

  onSave: () => void;

  onApprove: () => void;

  onReject: () => void;
}

export default function TeacherReviewPanel({
  aiScore,
  teacherScore,
  loading,
  onTeacherScoreChange,
  onSave,
  onApprove,
  onReject,
}: Props) {
  return (
    <div className="space-y-6">

      <TeacherScoreCard
        aiScore={aiScore}
        teacherScore={teacherScore}
        onTeacherScoreChange={
          onTeacherScoreChange
        }
      />

      <TeacherReviewActions
        loading={loading}
        onSave={onSave}
        onApprove={onApprove}
        onReject={onReject}
      />

    </div>
  );
}
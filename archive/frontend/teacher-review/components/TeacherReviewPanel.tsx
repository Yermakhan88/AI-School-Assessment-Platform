"use client";

import TeacherScoreCard from "./TeacherScoreCard";
import TeacherReviewActions from "./TeacherReviewActions";

interface Props {
  aiScore: number | null;

  teacherScore: number | null;

  teacherFeedback: string;

  loading: boolean;

  onTeacherScoreChange: (value: number) => void;

  onTeacherFeedbackChange: (value: string) => void;

  onSave: () => void;

  onApprove: () => void;

  onReject: () => void;
}

export default function TeacherReviewPanel({
  aiScore,
  teacherScore,
  teacherFeedback,
  loading,
  onTeacherScoreChange,
  onTeacherFeedbackChange,
  onSave,
  onApprove,
  onReject,
}: Props) {
  return (
    <div className="space-y-6">

      <TeacherScoreCard
        aiScore={aiScore}
        teacherScore={teacherScore}
        teacherFeedback={teacherFeedback}
        onTeacherScoreChange={onTeacherScoreChange}
        onTeacherFeedbackChange={onTeacherFeedbackChange}
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
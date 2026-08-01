"use client";

import { useState } from "react";

import { saveTeacherReview } from "../api/teacherReviewApi";

export function useTeacherReview() {
  const [selectedSubmissionId, setSelectedSubmissionId] =
    useState<number | null>(null);

  const [teacherScore, setTeacherScore] =
    useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  async function save(approved: boolean) {
    if (
      selectedSubmissionId === null ||
      teacherScore === null
    ) {
      return;
    }

    try {
      setLoading(true);

      await saveTeacherReview({
        submission_id: selectedSubmissionId,
        teacher_score: teacherScore,
        approved,
      });

    } finally {
      setLoading(false);
    }
  }

  return {
    selectedSubmissionId,
    setSelectedSubmissionId,

    teacherScore,
    setTeacherScore,

    loading,

    save,
  };
}
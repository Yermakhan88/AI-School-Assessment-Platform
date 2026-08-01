"use client";

import { useState } from "react";

import { saveTeacherReview } from "../api/teacherReviewApi";

export function useTeacherReview() {
  const [teacherScore, setTeacherScore] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);

  async function save(
    submissionId: number,
    approved: boolean,
  ) {
    if (teacherScore === null) {
      return;
    }

    try {
      setLoading(true);

      await saveTeacherReview({
        submission_id: submissionId,
        teacher_score: teacherScore,
        approved,
      });

    } finally {
      setLoading(false);
    }
  }

  return {
    teacherScore,
    setTeacherScore,
    loading,
    save,
  };
}
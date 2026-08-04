"use client";

import { useState } from "react";
import { toast } from "sonner";

import { submissionService } from "@/services/submission.service";

export function useTeacherReview() {
  const [
    selectedSubmissionId,
    setSelectedSubmissionId,
  ] = useState<number | null>(null);

  const [
    teacherScore,
    setTeacherScore,
  ] = useState<number | null>(null);

  const [
    teacherFeedback,
    setTeacherFeedback,
  ] = useState("");

  const [loading, setLoading] = useState(false);

  async function save(
    refreshSubmissions?: () => Promise<void>,
  ) {
    if (
      selectedSubmissionId === null ||
      teacherScore === null
    ) {
      return;
    }

    try {
      setLoading(true);

      await submissionService.saveTeacherReview(
        selectedSubmissionId,
        {
          teacher_score: teacherScore,
          teacher_feedback: teacherFeedback,
        },
      );

      if (refreshSubmissions) {
        await refreshSubmissions();
      }

      toast.success(
        "Teacher review saved.",
      );

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to save teacher review.",
      );

    } finally {
      setLoading(false);
    }
  }

  return {
    selectedSubmissionId,
    setSelectedSubmissionId,

    teacherScore,
    setTeacherScore,

    teacherFeedback,
    setTeacherFeedback,

    loading,

    save,
  };
}
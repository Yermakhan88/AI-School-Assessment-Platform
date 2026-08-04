"use client";

import { useCallback, useEffect, useState } from "react";

import { AssignmentApi } from "@/features/assignment-management/api/assignmentApi";
import { SubmissionApi } from "@/features/submission-review/api/submissionApi";

import { Assignment } from "@/features/assignment-management/types/assignment.types";
import { Submission } from "@/features/submission-review/types/submission.types";

const CURRENT_STUDENT_ID = 2;

export function useStudentWorkspace() {
  const [assignment, setAssignment] =
    useState<Assignment | null>(null);

  const [submission, setSubmission] =
    useState<Submission | null>(null);

  const [loading, setLoading] =
    useState(true);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);

      const [
        assignments,
        submissions,
      ] = await Promise.all([
        AssignmentApi.getAll(),
        SubmissionApi.getAll(),
      ]);

      const activeAssignment =
        assignments.find(
          (item) => item.is_active
        ) ?? null;

      setAssignment(activeAssignment);

      const mySubmission =
        submissions.find(
          (item) =>
            item.student?.id ===
              CURRENT_STUDENT_ID &&
            item.assignment?.id ===
              activeAssignment?.id
        ) ?? null;

      setSubmission(mySubmission);

    } catch (error) {
      console.error(
        "Student workspace error:",
        error
      );

      setAssignment(null);
      setSubmission(null);

    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    assignment,
    submission,
    loading,
    refresh,
  };
}
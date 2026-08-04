"use client";

import { useEffect, useState } from "react";

import { AssignmentApi } from "@/features/assignment-management/api/assignmentApi";
import { SubmissionApi } from "@/features/submission-review/api/submissionApi";

export function useStudentWorkspace() {
  const [assignment, setAssignment] = useState<any>(null);
  const [submission, setSubmission] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  async function refresh() {
    try {
      setLoading(true);

      const [assignments, submissions] =
        await Promise.all([
          AssignmentApi.getAll(),
          SubmissionApi.getAll(),
        ]);

      setAssignment(assignments[0] ?? null);

      setSubmission(submissions[0] ?? null);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return {
    assignment,
    submission,
    loading,
    refresh,
  };
}
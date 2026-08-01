"use client";

import { useState } from "react";

import { analyzeSubmission } from "../api/aiReviewApi";
import { AIReview } from "../types";

export function useAIReview() {
  const [review, setReview] = useState<AIReview | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  async function analyze(submissionId: number) {
    try {
      setLoading(true);
      setError(null);

      const result = await analyzeSubmission(
        submissionId
      );

      setReview(result);
    } catch (err) {
      console.error(err);

      setError("AI review failed.");
    } finally {
      setLoading(false);
    }
  }

  return {
    review,
    loading,
    error,
    analyze,
  };
}
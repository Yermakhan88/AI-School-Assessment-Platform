"use client";

import { useState } from "react";

import { AIReview } from "../types/aiReview.types";
import { AIReviewService } from "../services/aiReview.service";

export function useAIReview() {

  const [review, setReview] =
    useState<AIReview | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function analyze(
    submissionId: number
  ) {

    try {

      setLoading(true);

      const result =
        await AIReviewService.review(
          submissionId
        );

      setReview(result);

    } finally {

      setLoading(false);

    }

  }

  return {

    review,

    loading,

    analyze,

  };

}
import http from "@/lib/api/interceptors";

import { AIReview } from "../types/aiReview.types";

export const AIReviewApi = {
  async review(
    submissionId: number
  ): Promise<AIReview> {

    const { data } =
      await http.post<AIReview>(
        `/ai-review/${submissionId}`
      );

    return data;

  },
};
import { AIReview } from "../types";

const API_URL = "http://127.0.0.1:8000";

export async function analyzeSubmission(
  submissionId: number,
): Promise<AIReview> {
  const response = await fetch(
    `${API_URL}/ai-review/${submissionId}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    const error = await response.text();

    throw new Error(error);
  }

  return response.json();
}
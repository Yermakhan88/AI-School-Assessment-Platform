import { SaveTeacherReviewRequest } from "../types";

const API_URL = "http://127.0.0.1:8000";

export async function saveTeacherReview(
  request: SaveTeacherReviewRequest,
) {
  const response = await fetch(
    `${API_URL}/teacher-review/${request.submission_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
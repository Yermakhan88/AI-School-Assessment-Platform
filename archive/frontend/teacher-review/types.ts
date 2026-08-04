export interface TeacherReview {
  submission_id: number;

  ai_score: number;

  teacher_score: number | null;

  approved: boolean;
}

export interface SaveTeacherReviewRequest {
  submission_id: number;

  teacher_score: number;

  approved: boolean;
}
export interface AIReview {
  submission_id: number;

  model: string;

  score: number;

  grade: string;

  basic_operation: string;

  strengths: string[];

  weaknesses: string[];

  recommendations: string[];

  processing_time: number;

  created_at: string;
}
export interface AIReview {
  id: number;

  submission_id: number;

  model: string;

  score: number;

  grade: string;

  feedback: string;

  strengths: string[];

  weaknesses: string[];

  recommendations: string[];

  processing_time: number;

  created_at: string;
}
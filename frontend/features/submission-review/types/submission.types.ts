export interface SubmissionStudent {
  id: number;
  full_name: string;
}

export interface SubmissionAssignment {
  id: number;
  title: string;
}

export interface Submission {
  id: number;

  assignment_id: number;

  student_id: number;

  file_name: string;

  file_path: string;

  ai_score: number | null;

  teacher_score: number | null;

  ai_feedback: string | null;

  teacher_feedback: string | null;

  status: string;

  submitted_at: string;

  reviewed_at: string | null;

  student: SubmissionStudent;

  assignment: SubmissionAssignment;
}
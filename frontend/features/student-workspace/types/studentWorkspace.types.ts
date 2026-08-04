export interface StudentAssignment {
  id: number;

  title: string;

  description: string;

  due_date: string;

  subject: string;
}

export interface StudentSubmission {
  id: number;

  ai_score: number | null;

  teacher_score: number | null;

  ai_feedback: string | null;

  teacher_feedback: string | null;

  status: string;
}

export interface StudentDashboard {
  assignment: StudentAssignment | null;

  submission: StudentSubmission | null;
}
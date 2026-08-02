export type AssignmentStatus =
  | "ACTIVE"
  | "DRAFT"
  | "ARCHIVED";

export interface Assignment {

  id: number;

  title: string;

  description: string;

  group: string;

  subject: string;

  language: string;

  maxScore: number;

  deadline: string;

  status: AssignmentStatus;

  submitted: number;

  totalStudents: number;

  aiEnabled: boolean;
}
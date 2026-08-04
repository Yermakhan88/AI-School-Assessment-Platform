export interface Teacher {
  id: number;
  full_name: string;
  email: string;
  subject: string;
  is_active: boolean;
}

export interface Subject {
  id: number;
  name: string;
  code: string;
  description: string;
  is_active: boolean;
}

export interface Assignment {
  id: number;
  title: string;
  description: string;
  due_date: string;
  max_score: number;
  is_active: boolean;

  teacher: Teacher;
  subject: Subject;
}
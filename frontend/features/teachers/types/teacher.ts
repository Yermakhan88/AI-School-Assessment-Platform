export interface Teacher {
  id: number;

  fullName: string;

  email: string;

  subject: string;

  status: "Active" | "Inactive";
}
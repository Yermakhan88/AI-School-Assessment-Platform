const API_URL = "http://127.0.0.1:8000/api/submissions";

export interface Submission {
  id: number;
  assignment_id: number;
  student_id: number;
  file_name: string;
  file_path: string;
  submitted_at: string;
  ai_score: number | null;
  teacher_score: number | null;
  feedback: string | null;
  status: string;
}

export const submissionService = {
  async getAll(): Promise<Submission[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load submissions");
    }

    return response.json();
  },

  async upload(formData: FormData) {
    const response = await fetch(
      `${API_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    return response.json();
  },
};
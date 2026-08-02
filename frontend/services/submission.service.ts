const API_URL = "http://127.0.0.1:8000/api/submissions";

export interface Student {
  id: number;
  full_name: string;
}

export interface Assignment {
  id: number;
  title: string;
}

export interface Submission {
  id: number;

  assignment_id: number;
  student_id: number;

  assignment: Assignment;
  student: Student;

  file_name: string;
  file_path: string;

  submitted_at: string;
  reviewed_at: string | null;

  ai_score: number | null;
  teacher_score: number | null;

  ai_feedback: string | null;
  teacher_feedback: string | null;

  status: string;
}

export interface TeacherReviewRequest {
  teacher_score: number;
  teacher_feedback: string;
}

export const submissionService = {
  async getAll(): Promise<Submission[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        "Failed to load submissions",
      );
    }

    return response.json();
  },

  async upload(
    formData: FormData,
  ) {
    const response = await fetch(
      `${API_URL}/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error(
        "Upload failed",
      );
    }

    return response.json();
  },

  async saveTeacherReview(
    submissionId: number,
    review: TeacherReviewRequest,
  ) {
    const response = await fetch(
      `${API_URL}/${submissionId}/teacher-review`,
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(review),
      },
    );

    if (!response.ok) {
      throw new Error(
        "Failed to save teacher review",
      );
    }

    return response.json();
  },
};
const API_URL = "http://127.0.0.1:8000/api/assignments";

export interface Assignment {
  id: number;
  title: string;
  description: string | null;
  teacher_id: number;
  subject_id: number;
  due_date: string;
  max_score: number;
  is_active: boolean;
}

export interface CreateAssignmentDto {
  title: string;
  description: string | null;
  teacher_id: number;
  subject_id: number;
  due_date: string;
  max_score: number;
  is_active: boolean;
}

export interface UpdateAssignmentDto {
  title: string;
  description: string | null;
  teacher_id: number;
  subject_id: number;
  due_date: string;
  max_score: number;
  is_active: boolean;
}

export const assignmentService = {
  async getAll(): Promise<Assignment[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load assignments");
    }

    return response.json();
  },

  async getById(id: number): Promise<Assignment> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Assignment not found");
    }

    return response.json();
  },

  async create(
    data: CreateAssignmentDto
  ): Promise<Assignment> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create assignment");
    }

    return response.json();
  },

  async update(
    id: number,
    data: UpdateAssignmentDto
  ): Promise<Assignment> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update assignment");
    }

    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete assignment");
    }
  },
};
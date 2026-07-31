const API_URL = "http://127.0.0.1:8000/api/subjects";

export interface Subject {
  id: number;
  name: string;
  code: string;
  description: string | null;
  is_active: boolean;
}

export interface CreateSubjectDto {
  name: string;
  code: string;
  description: string | null;
  is_active: boolean;
}

export interface UpdateSubjectDto {
  name: string;
  code: string;
  description: string | null;
  is_active: boolean;
}

export const subjectService = {
  async getAll(): Promise<Subject[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load subjects");
    }

    return response.json();
  },

  async getById(id: number): Promise<Subject> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Subject not found");
    }

    return response.json();
  },

  async create(
    data: CreateSubjectDto
  ): Promise<Subject> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create subject");
    }

    return response.json();
  },

  async update(
    id: number,
    data: UpdateSubjectDto
  ): Promise<Subject> {
    const response = await fetch(
      `${API_URL}/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update subject");
    }

    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(
      `${API_URL}/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete subject");
    }
  },
};
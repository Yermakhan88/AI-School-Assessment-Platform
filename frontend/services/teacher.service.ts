import { getAuthHeaders } from "./api";

const API_URL = "http://127.0.0.1:8000/api/teachers";

export interface Teacher {
  id: number;
  full_name: string;
  email: string;
  subject: string;
  is_active: boolean;
}

export interface CreateTeacherDto {
  full_name: string;
  email: string;
  subject: string;
  is_active: boolean;
}

export interface UpdateTeacherDto {
  full_name: string;
  email: string;
  subject: string;
  is_active: boolean;
}

export const teacherService = {
  async getAll(): Promise<Teacher[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load teachers");
    }

    return response.json();
  },

  async getById(id: number): Promise<Teacher> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Teacher not found");
    }

    return response.json();
  },

  async create(data: CreateTeacherDto): Promise<Teacher> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create teacher");
    }

    return response.json();
  },

  async update(
    id: number,
    data: UpdateTeacherDto
  ): Promise<Teacher> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update teacher");
    }

    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete teacher");
    }
  },
};
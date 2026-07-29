const API_URL = "http://127.0.0.1:8000/api/students";

export interface Student {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  group_name: string;
  is_active: boolean;
}

export interface CreateStudentDto {
  full_name: string;
  email: string;
  phone: string;
  group_name: string;
  is_active: boolean;
}

export interface UpdateStudentDto {
  full_name: string;
  email: string;
  phone: string;
  group_name: string;
  is_active: boolean;
}

export const studentService = {
  async getAll(): Promise<Student[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to load students");
    }

    return response.json();
  },

  async getById(id: number): Promise<Student> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Student not found");
    }

    return response.json();
  },

  async create(data: CreateStudentDto): Promise<Student> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create student");
    }

    return response.json();
  },

  async update(
    id: number,
    data: UpdateStudentDto
  ): Promise<Student> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update student");
    }

    return response.json();
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete student");
    }
  },
};
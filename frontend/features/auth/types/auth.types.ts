export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface CurrentUser {
  id: number;
  full_name: string;
  email: string;
  role: "teacher" | "student" | "admin";
  is_active: boolean;
}
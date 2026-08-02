export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;

  role: "teacher" | "student";

  user_id: number;

  full_name: string;
}

export interface AuthUser {
  id: number;

  full_name: string;

  role: "teacher" | "student";

  token: string;
}
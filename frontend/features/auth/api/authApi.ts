import { LoginRequest } from "../types";

const API_URL = "http://127.0.0.1:8000/api/auth";

export async function login(
  credentials: LoginRequest,
) {
  const response = await fetch(
    `${API_URL}/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(credentials),
    },
  );

  if (!response.ok) {
    throw new Error(
      "Invalid email or password."
    );
  }

  return response.json();
}
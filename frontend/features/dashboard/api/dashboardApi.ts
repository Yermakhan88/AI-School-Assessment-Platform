import { DashboardStats } from "../types";

const API_URL = "http://127.0.0.1:8000/api/dashboard";

export async function getDashboardStats(): Promise<DashboardStats> {
  const response = await fetch(
    `${API_URL}/stats`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load dashboard statistics."
    );
  }

  return response.json();
}
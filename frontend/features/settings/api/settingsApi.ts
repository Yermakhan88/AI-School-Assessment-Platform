export interface Settings {
  school_name: string;
  version: string;
  openai_model: string;
  api_status: string;
}

const API_URL =
  "http://127.0.0.1:8000/api/settings";

export async function getSettings(): Promise<Settings> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      "Failed to load settings."
    );
  }

  return response.json();
}
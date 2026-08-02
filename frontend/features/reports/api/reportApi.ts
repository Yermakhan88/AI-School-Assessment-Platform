import { ReportStatistics } from "../types";

const API_URL = "http://127.0.0.1:8000/api/reports";

export async function getReportStatistics(): Promise<ReportStatistics> {
  const response = await fetch(
    `${API_URL}/statistics`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load report statistics."
    );
  }

  return response.json();
}
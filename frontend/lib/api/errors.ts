import axios from "axios";

export function getApiError(error: unknown): string {

  if (axios.isAxiosError(error)) {

    return (
      error.response?.data?.detail ??
      error.message
    );

  }

  return "Unexpected error";
}
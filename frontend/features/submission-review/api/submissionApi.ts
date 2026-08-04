import http from "@/lib/api/interceptors";
import { ENDPOINTS } from "@/lib/api/endpoints";

import { Submission } from "../types/submission.types";

export const SubmissionApi = {
  async getAll(): Promise<Submission[]> {
    const { data } =
      await http.get<Submission[]>(
        ENDPOINTS.SUBMISSIONS.LIST
      );

    return data;
  },

  async getById(
    id: number
  ): Promise<Submission> {
    const { data } =
      await http.get<Submission>(
        ENDPOINTS.SUBMISSIONS.DETAILS(id)
      );

    return data;
  },

  async upload(
    formData: FormData
  ) {
    const { data } =
      await http.post(
        ENDPOINTS.SUBMISSIONS.UPLOAD,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return data;
  },

  async updateTeacherReview(
    id: number,
    payload: {
      teacher_score: number;
      teacher_feedback: string;
    }
  ) {
    const { data } =
      await http.patch(
        ENDPOINTS.SUBMISSIONS.TEACHER_REVIEW(id),
        payload
      );

    return data;
  },
};
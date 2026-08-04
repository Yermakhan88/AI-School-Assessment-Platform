import http from "@/lib/api/interceptors";
import { ENDPOINTS } from "@/lib/api/endpoints";

import {
  Material,
  UploadMaterialRequest,
} from "../types/material.types";

export const MaterialApi = {
  async getAll(): Promise<Material[]> {
    const { data } =
      await http.get<Material[]>(
        ENDPOINTS.MATERIALS.LIST
      );

    return data;
  },

  async upload(
    request: UploadMaterialRequest,
  ): Promise<Material> {

    const formData = new FormData();

    formData.append(
      "title",
      request.title,
    );

    formData.append(
      "grade",
      request.grade.toString(),
    );

    formData.append(
      "teacher_id",
      request.teacher_id.toString(),
    );

    formData.append(
      "subject_id",
      request.subject_id.toString(),
    );

    formData.append(
      "file",
      request.file,
    );

    const { data } =
      await http.post<Material>(
        ENDPOINTS.MATERIALS.UPLOAD,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        },
      );

    return data;
  },
};
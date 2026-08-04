import http from "@/lib/api/interceptors";
import { ENDPOINTS } from "@/lib/api/endpoints";

import { Assignment } from "../types/assignment.types";

export const AssignmentApi = {
  async getAll(): Promise<Assignment[]> {
    const { data } = await http.get<Assignment[]>(
      ENDPOINTS.ASSIGNMENTS.LIST
    );

    return data;
  },

  async getById(id: number): Promise<Assignment> {
    const { data } = await http.get<Assignment>(
      ENDPOINTS.ASSIGNMENTS.DETAILS(id)
    );

    return data;
  },

  async create(
    payload: Partial<Assignment>
  ): Promise<Assignment> {
    const { data } = await http.post<Assignment>(
      ENDPOINTS.ASSIGNMENTS.CREATE,
      payload
    );

    return data;
  },

  async update(
    id: number,
    payload: Partial<Assignment>
  ): Promise<Assignment> {
    const { data } = await http.put<Assignment>(
      ENDPOINTS.ASSIGNMENTS.UPDATE(id),
      payload
    );

    return data;
  },

  async remove(id: number) {
    await http.delete(
      ENDPOINTS.ASSIGNMENTS.DELETE(id)
    );
  },
};
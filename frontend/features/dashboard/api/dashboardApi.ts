import http from "@/lib/api/interceptors";

import { ENDPOINTS } from "@/lib/api/endpoints";

import { DashboardStats } from "../types/dashboard.types";

export const DashboardApi = {
  async getStats(): Promise<DashboardStats> {
    const { data } =
      await http.get<DashboardStats>(
        ENDPOINTS.DASHBOARD.STATS
      );

    return data;
  },
};
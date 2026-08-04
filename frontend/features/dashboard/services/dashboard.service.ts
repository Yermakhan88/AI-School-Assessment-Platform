import { DashboardApi } from "../api/dashboardApi";

export const DashboardService = {
  getStats: () =>
    DashboardApi.getStats(),
};
import http from "@/lib/api/interceptors";

import { StudentDashboard } from "../types/studentWorkspace.types";

export const StudentWorkspaceApi = {
  async getDashboard(): Promise<StudentDashboard> {
    const { data } = await http.get<StudentDashboard>(
      "/student/dashboard"
    );

    return data;
  },
};
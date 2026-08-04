import { StudentWorkspaceApi } from "../api/studentWorkspaceApi";

export const StudentWorkspaceService = {
  getDashboard: () =>
    StudentWorkspaceApi.getDashboard(),
};
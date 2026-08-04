import { AssignmentApi } from "../api/assignmentApi";

export const AssignmentService = {
  getAll: () => AssignmentApi.getAll(),

  getById: (id: number) =>
    AssignmentApi.getById(id),

  create: (payload: any) =>
    AssignmentApi.create(payload),

  update: (id: number, payload: any) =>
    AssignmentApi.update(id, payload),

  remove: (id: number) =>
    AssignmentApi.remove(id),
};
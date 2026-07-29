import { teachers } from "../data/teachers";
import { Teacher } from "../types/teacher";

export const teacherService = {
  getAll(): Teacher[] {
    return teachers;
  },

  getById(id: number): Teacher | undefined {
    return teachers.find((teacher) => teacher.id === id);
  },
};
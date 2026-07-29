"use client";

import { useEffect, useState } from "react";
import {
  Teacher,
  teacherService,
  CreateTeacherDto,
  UpdateTeacherDto,
} from "@/services/teacher.service";

export function useTeachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTeachers = async () => {
    try {
      setLoading(true);

      const data = await teacherService.getAll();
      setTeachers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createTeacher = async (teacher: CreateTeacherDto) => {
    await teacherService.create(teacher);
    await loadTeachers();
  };

  const updateTeacher = async (
    id: number,
    teacher: UpdateTeacherDto
  ) => {
    await teacherService.update(id, teacher);
    await loadTeachers();
  };

  const deleteTeacher = async (id: number) => {
    await teacherService.delete(id);
    await loadTeachers();
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  return {
    teachers,
    loading,
    createTeacher,
    updateTeacher,
    deleteTeacher,
    refreshTeachers: loadTeachers,
  };
}
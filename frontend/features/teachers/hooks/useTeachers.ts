"use client";

import { useEffect, useState } from "react";
import {
  Teacher,
  teacherService,
  CreateTeacherDto,
} from "@/services/teacher.service";

export function useTeachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTeachers = async () => {
    try {
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

  useEffect(() => {
    loadTeachers();
  }, []);

  return {
    teachers,
    loading,
    createTeacher,
    refreshTeachers: loadTeachers,
  };
}
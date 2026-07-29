"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

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
      toast.error("Failed to load teachers");
    } finally {
      setLoading(false);
    }
  };

  const createTeacher = async (teacher: CreateTeacherDto) => {
    try {
      await teacherService.create(teacher);
      await loadTeachers();

      toast.success("Teacher created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create teacher");
    }
  };

  const updateTeacher = async (
    id: number,
    teacher: UpdateTeacherDto
  ) => {
    try {
      await teacherService.update(id, teacher);
      await loadTeachers();

      toast.success("Teacher updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update teacher");
    }
  };

  const deleteTeacher = async (id: number) => {
    try {
      await teacherService.delete(id);
      await loadTeachers();

      toast.success("Teacher deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete teacher");
    }
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
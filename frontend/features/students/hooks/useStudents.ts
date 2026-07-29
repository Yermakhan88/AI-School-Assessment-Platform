"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Student,
  studentService,
  CreateStudentDto,
  UpdateStudentDto,
} from "@/services/student.service";

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStudents = async () => {
    try {
      setLoading(true);

      const data = await studentService.getAll();
      setStudents(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  const createStudent = async (
    student: CreateStudentDto
  ) => {
    try {
      await studentService.create(student);
      await loadStudents();

      toast.success("Student created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create student");
    }
  };

  const updateStudent = async (
    id: number,
    student: UpdateStudentDto
  ) => {
    try {
      await studentService.update(id, student);
      await loadStudents();

      toast.success("Student updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update student");
    }
  };

  const deleteStudent = async (
    id: number
  ) => {
    try {
      await studentService.delete(id);
      await loadStudents();

      toast.success("Student deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete student");
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return {
    students,
    loading,
    createStudent,
    updateStudent,
    deleteStudent,
    refreshStudents: loadStudents,
  };
}
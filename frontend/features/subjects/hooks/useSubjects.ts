"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Subject,
  subjectService,
  CreateSubjectDto,
  UpdateSubjectDto,
} from "@/services/subject.service";

export function useSubjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSubjects = async () => {
    try {
      setLoading(true);

      const data = await subjectService.getAll();
      setSubjects(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load subjects");
    } finally {
      setLoading(false);
    }
  };

  const createSubject = async (
    subject: CreateSubjectDto
  ) => {
    try {
      await subjectService.create(subject);
      await loadSubjects();

      toast.success("Subject created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create subject");
    }
  };

  const updateSubject = async (
    id: number,
    subject: UpdateSubjectDto
  ) => {
    try {
      await subjectService.update(id, subject);
      await loadSubjects();

      toast.success("Subject updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update subject");
    }
  };

  const deleteSubject = async (
    id: number
  ) => {
    try {
      await subjectService.delete(id);
      await loadSubjects();

      toast.success("Subject deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete subject");
    }
  };

  useEffect(() => {
    loadSubjects();
  }, []);

  return {
    subjects,
    loading,
    createSubject,
    updateSubject,
    deleteSubject,
    refreshSubjects: loadSubjects,
  };
}
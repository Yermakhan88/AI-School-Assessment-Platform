"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Assignment,
  assignmentService,
  CreateAssignmentDto,
  UpdateAssignmentDto,
} from "@/services/assignment.service";

export function useAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAssignments = async () => {
    try {
      setLoading(true);

      const data = await assignmentService.getAll();
      setAssignments(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load assignments");
    } finally {
      setLoading(false);
    }
  };

  const createAssignment = async (
    assignment: CreateAssignmentDto
  ) => {
    try {
      await assignmentService.create(assignment);
      await loadAssignments();

      toast.success("Assignment created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create assignment");
    }
  };

  const updateAssignment = async (
    id: number,
    assignment: UpdateAssignmentDto
  ) => {
    try {
      await assignmentService.update(id, assignment);
      await loadAssignments();

      toast.success("Assignment updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update assignment");
    }
  };

  const deleteAssignment = async (
    id: number
  ) => {
    try {
      await assignmentService.delete(id);
      await loadAssignments();

      toast.success("Assignment deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete assignment");
    }
  };

  useEffect(() => {
    loadAssignments();
  }, []);

  return {
    assignments,
    loading,
    createAssignment,
    updateAssignment,
    deleteAssignment,
    refreshAssignments: loadAssignments,
  };
}
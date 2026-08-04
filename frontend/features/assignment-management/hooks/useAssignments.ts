"use client";

import { useEffect, useState } from "react";

import { AssignmentService } from "../services/assignment.service";
import { Assignment } from "../types/assignment.types";

export function useAssignments() {
  const [assignments, setAssignments] = useState<
    Assignment[]
  >([]);

  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  async function loadAssignments() {
    try {
      setLoading(true);

      const data =
        await AssignmentService.getAll();

      setAssignments(data);

      if (data.length > 0) {
        setSelectedAssignment(data[0]);
      }
    } catch {
      setError("Failed to load assignments");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAssignments();
  }, []);

  return {
    assignments,

    selectedAssignment,

    setSelectedAssignment,

    loading,

    error,

    refresh: loadAssignments,
  };
}
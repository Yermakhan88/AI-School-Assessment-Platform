"use client";

import { useMemo, useState } from "react";

import { assignments } from "../mock/assignments";

export function useAssignmentWorkspace() {
  const [search, setSearch] = useState("");

  const [selectedAssignmentId, setSelectedAssignmentId] = useState(
    assignments[0]?.id ?? 0
  );

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) =>
      assignment.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const selectedAssignment =
    filteredAssignments.find(
      (assignment) =>
        assignment.id === selectedAssignmentId
    ) ?? filteredAssignments[0];

  return {
    search,
    setSearch,

    assignments: filteredAssignments,

    selectedAssignment,

    selectedAssignmentId,

    setSelectedAssignmentId,
  };
}
"use client";

import { useState } from "react";

import { assignments } from "../mock/assignments";

export function useAssignmentWorkspace() {

  const [selectedAssignment, setSelectedAssignment] =
    useState(assignments[0]);

  return {

    assignments,

    selectedAssignment,

    setSelectedAssignment,

  };
}
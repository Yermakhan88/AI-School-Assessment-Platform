"use client";

import { Badge } from "@/components/ui/badge";

import { AssignmentStatus } from "../types/assignment.types";

interface Props {
  status: AssignmentStatus;
}

export default function AssignmentStatusBadge({
  status,
}: Props) {
  switch (status) {
    case "ACTIVE":
      return (
        <Badge>
          Published
        </Badge>
      );

    case "DRAFT":
      return (
        <Badge variant="secondary">
          Draft
        </Badge>
      );

    case "ARCHIVED":
      return (
        <Badge variant="outline">
          Archived
        </Badge>
      );

    default:
      return null;
  }
}
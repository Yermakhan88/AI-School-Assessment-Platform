"use client";

import { Input } from "@/components/ui/input";

import AssignmentDialog from "./AssignmentDialog";

import { Teacher } from "@/services/teacher.service";
import { Subject } from "@/services/subject.service";

import {
  CreateAssignmentDto,
} from "@/services/assignment.service";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  teachers: Teacher[];
  subjects: Subject[];

  onAssignmentCreated: (
    assignment: CreateAssignmentDto
  ) => Promise<void>;
}

export default function AssignmentToolbar({
  search,
  onSearchChange,
  teachers,
  subjects,
  onAssignmentCreated,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <Input
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        placeholder="Search assignments..."
        className="max-w-sm"
      />

      <AssignmentDialog
        mode="create"
        teachers={teachers}
        subjects={subjects}
        onAssignmentCreated={onAssignmentCreated}
      />

    </div>
  );
}
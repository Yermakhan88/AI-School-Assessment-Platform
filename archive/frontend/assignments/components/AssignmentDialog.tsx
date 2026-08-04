"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import AssignmentForm from "./AssignmentForm";

import {
  Assignment,
  CreateAssignmentDto,
  UpdateAssignmentDto,
} from "@/services/assignment.service";

import { Teacher } from "@/services/teacher.service";
import { Subject } from "@/services/subject.service";

interface Props {
  mode?: "create" | "edit";

  assignment?: Assignment;

  teachers: Teacher[];
  subjects: Subject[];

  trigger?: React.ReactNode;

  onAssignmentCreated?: (
    assignment: CreateAssignmentDto
  ) => Promise<void>;

  onAssignmentUpdated?: (
    id: number,
    assignment: UpdateAssignmentDto
  ) => Promise<void>;
}

export default function AssignmentDialog({
  mode = "create",
  assignment,
  teachers,
  subjects,
  trigger,
  onAssignmentCreated,
  onAssignmentUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (
    data: CreateAssignmentDto | UpdateAssignmentDto
  ) => {
    if (mode === "create") {
      if (!onAssignmentCreated) return;

      await onAssignmentCreated(
        data as CreateAssignmentDto
      );
    } else {
      if (!assignment || !onAssignmentUpdated) return;

      await onAssignmentUpdated(
        assignment.id,
        data as UpdateAssignmentDto
      );
    }

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        {trigger ?? (
            <Button>
              + Add Assignment
            </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "create"
              ? "Add Assignment"
              : "Edit Assignment"}
          </DialogTitle>
        </DialogHeader>

        <AssignmentForm
          assignment={assignment}
          teachers={teachers}
          subjects={subjects}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import TeacherForm from "./TeacherForm";

import {
  CreateTeacherDto,
  Teacher,
  UpdateTeacherDto,
} from "@/services/teacher.service";

interface Props {
  mode?: "create" | "edit";

  teacher?: Teacher;

  trigger?: React.ReactNode;

  onTeacherCreated?: (
    teacher: CreateTeacherDto
  ) => Promise<void>;

  onTeacherUpdated?: (
    id: number,
    teacher: UpdateTeacherDto
  ) => Promise<void>;
}

export default function TeacherDialog({
  mode = "create",
  teacher,
  trigger,
  onTeacherCreated,
  onTeacherUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
  }, [open]);

  const handleSubmit = async (
    data: CreateTeacherDto | UpdateTeacherDto
  ) => {
    if (mode === "create") {
      if (!onTeacherCreated) return;

      await onTeacherCreated(data as CreateTeacherDto);
    } else {
      if (!teacher || !onTeacherUpdated) return;

      await onTeacherUpdated(
        teacher.id,
        data as UpdateTeacherDto
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
            + Add Teacher
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "create"
              ? "Add Teacher"
              : "Edit Teacher"}
          </DialogTitle>
        </DialogHeader>

        <TeacherForm
          teacher={teacher}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
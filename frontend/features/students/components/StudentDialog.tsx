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

import StudentForm from "./StudentForm";

import {
  CreateStudentDto,
  Student,
  UpdateStudentDto,
} from "@/services/student.service";

interface Props {
  mode?: "create" | "edit";

  student?: Student;

  trigger?: React.ReactNode;

  onStudentCreated?: (
    student: CreateStudentDto
  ) => Promise<void>;

  onStudentUpdated?: (
    id: number,
    student: UpdateStudentDto
  ) => Promise<void>;
}

export default function StudentDialog({
  mode = "create",
  student,
  trigger,
  onStudentCreated,
  onStudentUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
  }, [open]);

  const handleSubmit = async (
    data: CreateStudentDto | UpdateStudentDto
  ) => {
    if (mode === "create") {
      if (!onStudentCreated) return;

      await onStudentCreated(data as CreateStudentDto);
    } else {
      if (!student || !onStudentUpdated) return;

      await onStudentUpdated(
        student.id,
        data as UpdateStudentDto
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
            + Add Student
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "create"
              ? "Add Student"
              : "Edit Student"}
          </DialogTitle>
        </DialogHeader>

        <StudentForm
          student={student}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
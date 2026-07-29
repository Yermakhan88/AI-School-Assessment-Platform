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

import TeacherForm from "./TeacherForm";

import { CreateTeacherDto } from "@/services/teacher.service";

interface Props {
  onTeacherCreated: (teacher: CreateTeacherDto) => Promise<void>;
}

export default function TeacherDialog({
  onTeacherCreated,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleSuccess = async (teacher: CreateTeacherDto) => {
    await onTeacherCreated(teacher);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          + Add Teacher
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Add Teacher
          </DialogTitle>
        </DialogHeader>

        <TeacherForm
          onSubmit={handleSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
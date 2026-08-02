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

import SubjectForm from "./SubjectForm";

import {
  CreateSubjectDto,
  Subject,
  UpdateSubjectDto,
} from "@/services/subject.service";

interface Props {
  mode?: "create" | "edit";

  subject?: Subject;

  trigger?: React.ReactNode;

  onSubjectCreated?: (
    subject: CreateSubjectDto
  ) => Promise<void>;

  onSubjectUpdated?: (
    id: number,
    subject: UpdateSubjectDto
  ) => Promise<void>;
}

export default function SubjectDialog({
  mode = "create",
  subject,
  trigger,
  onSubjectCreated,
  onSubjectUpdated,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (
    data: CreateSubjectDto | UpdateSubjectDto
  ) => {
    if (mode === "create") {
      if (!onSubjectCreated) return;

      await onSubjectCreated(data as CreateSubjectDto);
    } else {
      if (!subject || !onSubjectUpdated) return;

      await onSubjectUpdated(
        subject.id,
        data as UpdateSubjectDto
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
          {mode === "create"
            ? "+ Add Subject"
            : "Edit Subject"}
        </Button>
      )}
    </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {mode === "create"
              ? "Add Subject"
              : "Edit Subject"}
          </DialogTitle>
        </DialogHeader>

        <SubjectForm
          subject={subject}
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
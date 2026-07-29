"use client";

import { Input } from "@/components/ui/input";

import TeacherDialog from "./TeacherDialog";

import { CreateTeacherDto } from "@/services/teacher.service";

interface Props {
  onTeacherCreated: (teacher: CreateTeacherDto) => Promise<void>;
}

export default function TeacherToolbar({
  onTeacherCreated,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        placeholder="Search teacher..."
        className="max-w-sm"
      />

      <TeacherDialog
        onTeacherCreated={onTeacherCreated}
      />
    </div>
  );
}
"use client";

import { Input } from "@/components/ui/input";

import TeacherDialog from "./TeacherDialog";

import { CreateTeacherDto } from "@/services/teacher.service";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  onTeacherCreated: (
    teacher: CreateTeacherDto
  ) => Promise<void>;
}

export default function TeacherToolbar({
  search,
  onSearchChange,
  onTeacherCreated,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by name, email or subject..."
        className="max-w-sm"
      />

      <TeacherDialog
        mode="create"
        onTeacherCreated={onTeacherCreated}
      />
    </div>
  );
}
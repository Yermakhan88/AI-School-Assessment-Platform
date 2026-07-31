"use client";

import { Input } from "@/components/ui/input";

import SubjectDialog from "./SubjectDialog";

import { CreateSubjectDto } from "@/services/subject.service";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  onSubjectCreated: (
    subject: CreateSubjectDto
  ) => Promise<void>;
}

export default function SubjectToolbar({
  search,
  onSearchChange,
  onSubjectCreated,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by name, code or description..."
        className="max-w-sm"
      />

      <SubjectDialog
        mode="create"
        onSubjectCreated={onSubjectCreated}
      />
    </div>
  );
}
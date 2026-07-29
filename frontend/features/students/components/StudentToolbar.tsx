"use client";

import { Input } from "@/components/ui/input";

import StudentDialog from "./StudentDialog";

import { CreateStudentDto } from "@/services/student.service";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;

  onStudentCreated: (
    student: CreateStudentDto
  ) => Promise<void>;
}

export default function StudentToolbar({
  search,
  onSearchChange,
  onStudentCreated,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by name, email, phone or group..."
        className="max-w-sm"
      />

      <StudentDialog
        mode="create"
        onStudentCreated={onStudentCreated}
      />
    </div>
  );
}
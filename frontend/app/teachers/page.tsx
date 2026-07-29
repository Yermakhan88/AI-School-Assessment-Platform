"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import TeacherToolbar from "@/features/teachers/components/TeacherToolbar";
import TeacherTable from "@/features/teachers/components/TeacherTable";

import { useTeachers } from "@/features/teachers/hooks/useTeachers";

export default function TeachersPage() {
  const {
    teachers,
    loading,
    createTeacher,
    updateTeacher,
    deleteTeacher,
  } = useTeachers();

  const [search, setSearch] = useState("");

  const filteredTeachers = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return teachers;
    }

    return teachers.filter((teacher) => {
      return (
        teacher.full_name.toLowerCase().includes(value) ||
        teacher.email.toLowerCase().includes(value) ||
        teacher.subject.toLowerCase().includes(value)
      );
    });
  }, [teachers, search]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Teachers
        </h1>

        <TeacherToolbar
          search={search}
          onSearchChange={setSearch}
          onTeacherCreated={createTeacher}
        />

        <TeacherTable
          teachers={filteredTeachers}
          loading={loading}
          onTeacherUpdated={updateTeacher}
          onTeacherDeleted={deleteTeacher}
        />
      </div>
    </DashboardLayout>
  );
}
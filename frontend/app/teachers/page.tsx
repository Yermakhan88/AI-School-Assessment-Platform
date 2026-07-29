"use client";

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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Teachers
        </h1>

        <TeacherToolbar
          onTeacherCreated={createTeacher}
        />

        <TeacherTable
          teachers={teachers}
          loading={loading}
          onTeacherUpdated={updateTeacher}
          onTeacherDeleted={deleteTeacher}
        />
      </div>
    </DashboardLayout>
  );
}
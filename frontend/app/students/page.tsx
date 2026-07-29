"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import StudentToolbar from "@/features/students/components/StudentToolbar";
import StudentTable from "@/features/students/components/StudentTable";

import { useStudents } from "@/features/students/hooks/useStudents";

export default function StudentsPage() {
  const {
    students,
    loading,
    createStudent,
    updateStudent,
    deleteStudent,
  } = useStudents();

  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return students;
    }

    return students.filter((student) => {
      return (
        student.full_name.toLowerCase().includes(value) ||
        student.email.toLowerCase().includes(value) ||
        student.phone.toLowerCase().includes(value) ||
        student.group_name.toLowerCase().includes(value)
      );
    });
  }, [students, search]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Students
        </h1>

        <StudentToolbar
          search={search}
          onSearchChange={setSearch}
          onStudentCreated={createStudent}
        />

        <StudentTable
          students={filteredStudents}
          loading={loading}
          onStudentUpdated={updateStudent}
          onStudentDeleted={deleteStudent}
        />
      </div>
    </DashboardLayout>
  );
}
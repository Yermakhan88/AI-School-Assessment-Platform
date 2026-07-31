"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";

import AssignmentToolbar from "@/features/assignments/components/AssignmentToolbar";
import AssignmentTable from "@/features/assignments/components/AssignmentTable";

import { useAssignments } from "@/features/assignments/hooks/useAssignments";
import { useTeachers } from "@/features/teachers/hooks/useTeachers";
import { useSubjects } from "@/features/subjects/hooks/useSubjects";

export default function AssignmentsPage() {
  const {
    assignments,
    loading,
    createAssignment,
    updateAssignment,
    deleteAssignment,
  } = useAssignments();

  const { teachers } = useTeachers();
  const { subjects } = useSubjects();

  const [search, setSearch] = useState("");

  const filteredAssignments = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return assignments;
    }

    return assignments.filter((assignment) =>
      assignment.title.toLowerCase().includes(value)
    );
  }, [assignments, search]);

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <PageHeader
          title="Assignments"
          description="Manage assignments"
        />

        <AssignmentToolbar
          search={search}
          onSearchChange={setSearch}
          teachers={teachers}
          subjects={subjects}
          onAssignmentCreated={createAssignment}
        />

        <AssignmentTable
          assignments={filteredAssignments}
          teachers={teachers}
          subjects={subjects}
          loading={loading}
          onAssignmentUpdated={updateAssignment}
          onAssignmentDeleted={deleteAssignment}
        />

      </div>
    </DashboardLayout>
  );
}
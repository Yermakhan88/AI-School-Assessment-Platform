"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import PageHeader from "@/components/common/PageHeader";

import SubjectToolbar from "@/features/subjects/components/SubjectToolbar";
import SubjectTable from "@/features/subjects/components/SubjectTable";

import { useSubjects } from "@/features/subjects/hooks/useSubjects";

export default function SubjectsPage() {
  const {
    subjects,
    loading,
    createSubject,
    updateSubject,
    deleteSubject,
  } = useSubjects();

  const [search, setSearch] = useState("");

  const filteredSubjects = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return subjects;
    }

    return subjects.filter((subject) => {
      return (
        subject.name.toLowerCase().includes(value) ||
        subject.code.toLowerCase().includes(value) ||
        (subject.description ?? "")
          .toLowerCase()
          .includes(value)
      );
    });
  }, [subjects, search]);

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <PageHeader
          title="Subjects"
          description="Manage school subjects"
        />

        <SubjectToolbar
          search={search}
          onSearchChange={setSearch}
          onSubjectCreated={createSubject}
        />

        <SubjectTable
          subjects={filteredSubjects}
          loading={loading}
          onSubjectUpdated={updateSubject}
          onSubjectDeleted={deleteSubject}
        />

      </div>
    </DashboardLayout>
  );
}
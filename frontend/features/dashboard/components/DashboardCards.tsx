"use client";

import { GraduationCap, Users, BookOpen, FileText } from "lucide-react";

import StatCard from "@/features/teacher-workspace/components/StatCard";

import { useDashboard } from "../hooks/useDashboard";

export default function DashboardCards() {
  const {
    stats,
    loading,
    error,
  } = useDashboard();

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
        Failed to load dashboard statistics.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Teachers"
        value={stats.teachers.toString()}
        icon={<GraduationCap size={24} />}
      />

      <StatCard
        title="Students"
        value={stats.students.toString()}
        icon={<Users size={24} />}
      />

      <StatCard
        title="Assignments"
        value={stats.assignments.toString()}
        icon={<BookOpen size={24} />}
      />

      <StatCard
        title="Submissions"
        value={stats.submissions.toString()}
        icon={<FileText size={24} />}
      />

    </div>
  );
}
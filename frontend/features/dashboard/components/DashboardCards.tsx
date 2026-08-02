"use client";

import { DashboardStats } from "../types";

interface Props {
  stats: DashboardStats;
}

interface CardProps {
  title: string;
  value: number;
  icon: string;
}

function DashboardCard({
  title,
  value,
  icon,
}: CardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <div className="text-sm text-slate-500">
            {title}
          </div>

          <div className="mt-2 text-3xl font-bold">
            {value}
          </div>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default function DashboardCards({
  stats,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      <DashboardCard
        title="Teachers"
        value={stats.teachers}
        icon="👨‍🏫"
      />

      <DashboardCard
        title="Students"
        value={stats.students}
        icon="👨‍🎓"
      />

      <DashboardCard
        title="Subjects"
        value={stats.subjects}
        icon="📚"
      />

      <DashboardCard
        title="Assignments"
        value={stats.assignments}
        icon="📝"
      />

      <DashboardCard
        title="Submissions"
        value={stats.submissions}
        icon="📄"
      />

    </div>
  );
}
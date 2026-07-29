import DashboardLayout from "@/components/layout/DashboardLayout";

import TeacherToolbar from "@/features/teachers/components/TeacherToolbar";
import TeacherTable from "@/features/teachers/components/TeacherTable";

export default function TeachersPage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold">
          Teachers
        </h1>

        <TeacherToolbar />

        <TeacherTable />

      </div>

    </DashboardLayout>
  );
}
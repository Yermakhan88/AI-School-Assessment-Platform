import TeacherWorkspaceLayout from "@/shared/layouts/TeacherWorkspaceLayout";
import TeacherWorkspaceHome from "@/features/teacher-workspace/components/TeacherWorkspaceHome";

export default function Page() {
  return (
    <TeacherWorkspaceLayout>
      <TeacherWorkspaceHome />
    </TeacherWorkspaceLayout>
  );
}
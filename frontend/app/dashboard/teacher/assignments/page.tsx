import TeacherWorkspaceLayout from "@/shared/layouts/TeacherWorkspaceLayout";
import AssignmentWorkspace from "@/features/assignment-management/components/AssignmentWorkspace";

export default function AssignmentManagementPage() {
  return (
    <TeacherWorkspaceLayout>
      <AssignmentWorkspace />
    </TeacherWorkspaceLayout>
  );
}
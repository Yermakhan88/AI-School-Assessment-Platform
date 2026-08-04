import TeacherWorkspaceLayout from "@/shared/layouts/TeacherWorkspaceLayout";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TeacherWorkspaceLayout>
      {children}
    </TeacherWorkspaceLayout>
  );
}
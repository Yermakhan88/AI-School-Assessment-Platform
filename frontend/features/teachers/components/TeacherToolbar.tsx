import { Input } from "@/components/ui/input";

import TeacherDialog from "./TeacherDialog";

export default function TeacherToolbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <Input
        placeholder="Search teacher..."
        className="max-w-sm"
      />

      <TeacherDialog />

    </div>
  );
}
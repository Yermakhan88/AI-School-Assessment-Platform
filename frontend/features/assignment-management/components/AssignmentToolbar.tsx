import WorkspaceHeader from "@/shared/components/WorkspaceHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function AssignmentToolbar() {
  return (
    <WorkspaceHeader
      title="Assignment Management"
      description="Create and manage learning activities."
      actions={
        <>
          <Input
            className="w-64"
            placeholder="Search assignment..."
          />

          <Button>

            <Plus className="mr-2 h-4 w-4" />

            New Assignment

          </Button>
        </>
      }
    />
  );
}
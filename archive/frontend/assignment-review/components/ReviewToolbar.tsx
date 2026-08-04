import WorkspaceHeader from "@/shared/components/WorkspaceHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function ReviewToolbar() {
  return (
    <WorkspaceHeader
      title="Assignment Review"
      description="Review student submissions with AI assistance."
      actions={
        <>
          <Input
            className="w-64"
            placeholder="Search student..."
          />

          <Button variant="outline">

            <Filter className="mr-2 h-4 w-4" />

            Filter

          </Button>
        </>
      }
    />
  );
}
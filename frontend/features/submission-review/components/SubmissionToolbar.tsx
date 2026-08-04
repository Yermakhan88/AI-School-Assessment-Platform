"use client";

import WorkspaceHeader from "@/shared/components/WorkspaceHeader";
import WorkspaceSearch from "@/shared/components/WorkspaceSearch";

export default function SubmissionToolbar() {
  return (
    <WorkspaceHeader
      title="Submission Review"
      description="Review submitted student assignments."
      actions={
        <WorkspaceSearch
          placeholder="Search student..."
        />
      }
    />
  );
}
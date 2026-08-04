"use client";

import UploadHomeworkDialog from "@/features/submission-review/components/UploadHomeworkDialog";

import { useStudentWorkspace } from "../hooks/useStudentWorkspace";

import { SubmissionService } from "@/features/submission-review/services/submission.service";

export default function UploadHomeworkCard() {

  const {
    assignment,
  } = useStudentWorkspace();

  if (!assignment) {

    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold">

          Upload Homework

        </h2>

        <p className="mt-5 text-slate-500">

          No active assignment.

        </p>

      </div>
    );

  }

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">

        Upload Homework

      </h2>

      <UploadHomeworkDialog
        assignmentId={assignment.id}
        studentId={2}
        onUpload={SubmissionService.upload}
      />

    </div>

  );

}
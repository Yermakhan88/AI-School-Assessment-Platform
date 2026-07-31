"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/common/PageHeader";

import UploadHomeworkDialog from "@/features/submissions/components/UploadHomeworkDialog";
import { useSubmissions } from "@/features/submissions/hooks/useSubmissions";

export default function UploadHomeworkPage() {
  const { uploadSubmission } = useSubmissions();

  // Пока используем тестовые значения.
  // После подключения авторизации они будут
  // автоматически подставляться из currentUser.
  const assignmentId = 1;
  const studentId = 1;

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <PageHeader
          title="Upload Homework"
          description="Submit your assignment."
        />

        <div className="rounded-xl border bg-white p-8 shadow-sm">

          <h2 className="text-xl font-semibold">
            Python Variables
          </h2>

          <p className="mt-2 text-slate-500">
            Subject: Informatics
          </p>

          <p className="text-slate-500">
            Due: 20 September 2026
          </p>

          <div className="mt-6">

            <UploadHomeworkDialog
              assignmentId={assignmentId}
              studentId={studentId}
              onUpload={uploadSubmission}
            />

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
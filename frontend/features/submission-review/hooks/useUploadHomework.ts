"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useUploadHomework } from "../hooks/useUploadHomework";

interface Props {
  assignmentId: number;
  studentId: number;
}

export default function UploadHomeworkDialog({
  assignmentId,
  studentId,
}: Props) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const { uploading, uploadHomework } = useUploadHomework({
    onSuccess: () => {
      setFile(null);
      setOpen(false);

      alert("Homework uploaded successfully.");
    },
    onError: () => {
      alert("Upload failed.");
    },
  });

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "assignment_id",
      assignmentId.toString()
    );
    formData.append(
      "student_id",
      studentId.toString()
    );

    await uploadHomework(formData);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Upload Homework
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Upload Homework
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files?.[0] ?? null)
            }
          />

          {file && (
            <div className="rounded-md border bg-slate-50 p-3 text-sm">
              <p className="font-medium">
                {file.name}
              </p>
              <p className="text-slate-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}

          <Button
            className="w-full"
            disabled={!file || uploading}
            onClick={handleUpload}
          >
            {uploading
              ? "Uploading..."
              : "Upload"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
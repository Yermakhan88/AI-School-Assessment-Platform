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

interface Props {
  assignmentId: number;
  studentId: number;

  onUpload: (
    formData: FormData
  ) => Promise<void>;
}

export default function UploadHomeworkDialog({
  assignmentId,
  studentId,
  onUpload,
}: Props) {
  const [open, setOpen] = useState(false);

  const [file, setFile] =
    useState<File | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const handleUpload = async () => {
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

    setUploading(true);

    try {
      await onUpload(formData);

      setFile(null);

      setOpen(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
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

        <div className="space-y-5">

          <input
            type="file"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] ?? null
              )
            }
          />

          <Button
            className="w-full"
            onClick={handleUpload}
            disabled={
              uploading || file === null
            }
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
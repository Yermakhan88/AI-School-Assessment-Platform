"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { MaterialService } from "../services/material.service";

export default function MaterialUploader() {
  const [title, setTitle] = useState("");

  const [grade, setGrade] = useState(7);

  const [teacherId] = useState(1);

  const [subjectId] = useState(1);

  const [file, setFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function upload() {

    if (!file) return;

    try {

      setLoading(true);

      await MaterialService.upload({
        title,
        grade,
        teacher_id: teacherId,
        subject_id: subjectId,
        file,
      });

      alert("Material uploaded.");

      setTitle("");

      setFile(null);

    } catch {

      alert("Upload failed.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-5">

      <h2 className="text-2xl font-bold">

        Upload Material

      </h2>

      <Input
        placeholder="Material title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <Input
        type="number"
        value={grade}
        onChange={(e) =>
          setGrade(Number(e.target.value))
        }
      />

      <Input
        type="file"
        accept=".pdf,.docx,.pptx,.txt"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] ?? null
          )
        }
      />

      <Button
        onClick={upload}
        disabled={loading}
      >

        {loading
          ? "Uploading..."
          : "Upload"}

      </Button>

    </div>

  );

}
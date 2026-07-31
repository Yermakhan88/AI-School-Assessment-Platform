"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  CreateSubjectDto,
  Subject,
  UpdateSubjectDto,
} from "@/services/subject.service";

interface Props {
  subject?: Subject;
  onSubmit: (
    subject: CreateSubjectDto | UpdateSubjectDto
  ) => Promise<void>;
}

export default function SubjectForm({
  subject,
  onSubmit,
}: Props) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!subject) {
      return;
    }

    setName(subject.name);
    setCode(subject.code);
    setDescription(subject.description ?? "");
    setIsActive(subject.is_active);
  }, [subject]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSaving(true);

    try {
      await onSubmit({
        name,
        code,
        description: description || null,
        is_active: isActive,
      });

      if (!subject) {
        setName("");
        setCode("");
        setDescription("");
        setIsActive(true);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="text-sm font-medium">
          Subject Name
        </label>

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Informatics"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Subject Code
        </label>

        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="INF101"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Description
        </label>

        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Computer Science"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Status
        </label>

        <select
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          value={isActive ? "Active" : "Inactive"}
          onChange={(e) =>
            setIsActive(e.target.value === "Active")
          }
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={saving}
      >
        {saving
          ? "Saving..."
          : subject
            ? "Update Subject"
            : "Save Subject"}
      </Button>
    </form>
  );
}
"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { CreateTeacherDto } from "@/services/teacher.service";

interface Props {
  onSubmit: (teacher: CreateTeacherDto) => Promise<void>;
}

export default function TeacherForm({
  onSubmit,
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    setSaving(true);

    try {
      await onSubmit({
        full_name: fullName,
        email,
        subject,
        is_active: isActive,
      });

      setFullName("");
      setEmail("");
      setSubject("");
      setIsActive(true);
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
          Full Name
        </label>

        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Teacher full name"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Email
        </label>

        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="teacher@email.com"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Subject
        </label>

        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Informatics"
          required
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
        {saving ? "Saving..." : "Save Teacher"}
      </Button>
    </form>
  );
}
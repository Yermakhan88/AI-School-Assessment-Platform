"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  CreateStudentDto,
  Student,
  UpdateStudentDto,
} from "@/services/student.service";

interface Props {
  student?: Student;
  onSubmit: (
    student: CreateStudentDto | UpdateStudentDto
  ) => Promise<void>;
}

export default function StudentForm({
  student,
  onSubmit,
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [groupName, setGroupName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!student) {
      return;
    }

    setFullName(student.full_name);
    setEmail(student.email);
    setPhone(student.phone);
    setGroupName(student.group_name);
    setIsActive(student.is_active);
  }, [student]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSaving(true);

    try {
      await onSubmit({
        full_name: fullName,
        email,
        phone,
        group_name: groupName,
        is_active: isActive,
      });

      if (!student) {
        setFullName("");
        setEmail("");
        setPhone("");
        setGroupName("");
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
          Full Name
        </label>

        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Student full name"
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
          placeholder="student@email.com"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Phone
        </label>

        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+77011234567"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Group
        </label>

        <Input
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="CS-101"
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
        {saving
          ? "Saving..."
          : student
            ? "Update Student"
            : "Save Student"}
      </Button>
    </form>
  );
}
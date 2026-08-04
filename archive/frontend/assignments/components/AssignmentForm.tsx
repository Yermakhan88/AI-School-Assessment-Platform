"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Assignment,
  CreateAssignmentDto,
  UpdateAssignmentDto,
} from "@/services/assignment.service";

import { Teacher } from "@/services/teacher.service";
import { Subject } from "@/services/subject.service";

interface Props {
  assignment?: Assignment;

  teachers: Teacher[];
  subjects: Subject[];

  onSubmit: (
    assignment: CreateAssignmentDto | UpdateAssignmentDto
  ) => Promise<void>;
}

export default function AssignmentForm({
  assignment,
  teachers,
  subjects,
  onSubmit,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [teacherId, setTeacherId] = useState(0);
  const [subjectId, setSubjectId] = useState(0);

  const [dueDate, setDueDate] = useState("");
  const [maxScore, setMaxScore] = useState(100);

  const [isActive, setIsActive] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!assignment) return;

    setTitle(assignment.title);
    setDescription(assignment.description ?? "");
    setTeacherId(assignment.teacher_id);
    setSubjectId(assignment.subject_id);
    setDueDate(assignment.due_date);
    setMaxScore(assignment.max_score);
    setIsActive(assignment.is_active);
  }, [assignment]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSaving(true);

    try {
      await onSubmit({
        title,
        description,
        teacher_id: teacherId,
        subject_id: subjectId,
        due_date: dueDate,
        max_score: maxScore,
        is_active: isActive,
      });

      if (!assignment) {
        setTitle("");
        setDescription("");
        setTeacherId(0);
        setSubjectId(0);
        setDueDate("");
        setMaxScore(100);
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
          Title
        </label>

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Assignment title"
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
          placeholder="Assignment description"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Teacher
        </label>

        <select
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          value={teacherId}
          onChange={(e) =>
            setTeacherId(Number(e.target.value))
          }
          required
        >
          <option value={0}>
            Select teacher
          </option>

          {teachers.map((teacher) => (
            <option
              key={teacher.id}
              value={teacher.id}
            >
              {teacher.full_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">
          Subject
        </label>

        <select
          className="w-full rounded-md border border-input bg-background px-3 py-2"
          value={subjectId}
          onChange={(e) =>
            setSubjectId(Number(e.target.value))
          }
          required
        >
          <option value={0}>
            Select subject
          </option>

          {subjects.map((subject) => (
            <option
              key={subject.id}
              value={subject.id}
            >
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">
          Due Date
        </label>

        <Input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Max Score
        </label>

        <Input
          type="number"
          value={maxScore}
          onChange={(e) =>
            setMaxScore(Number(e.target.value))
          }
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
            setIsActive(
              e.target.value === "Active"
            )
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
          : assignment
          ? "Update Assignment"
          : "Save Assignment"}
      </Button>
    </form>
  );
}
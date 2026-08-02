"use client";

import {
  CalendarDays,
  ChevronRight,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { Assignment } from "../types/assignment.types";

interface AssignmentCardProps {
  assignment: Assignment;
  active?: boolean;
  onClick?: () => void;
}

export default function AssignmentCard({
  assignment,
  active = false,
  onClick,
}: AssignmentCardProps) {
  const progress =
    (assignment.submitted / assignment.totalStudents) * 100;

  return (
    <Card
      onClick={onClick}
      className={`
        group
        cursor-pointer
        rounded-2xl
        border
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

        ${
          active
            ? "border-blue-500 bg-blue-50"
            : "border-slate-200 bg-white"
        }
      `}
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-base font-semibold text-slate-900">
            {assignment.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {assignment.subject}
          </p>

        </div>

        <Badge
          variant={
            assignment.status === "ACTIVE"
              ? "default"
              : assignment.status === "DRAFT"
              ? "secondary"
              : "outline"
          }
        >
          {assignment.status}
        </Badge>

      </div>

      {/* Information */}

      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-2 text-sm text-slate-600">

          <Users className="h-4 w-4" />

          <span>{assignment.group}</span>

        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">

          <CalendarDays className="h-4 w-4" />

          <span>{assignment.deadline}</span>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between text-sm">

          <span className="text-slate-500">
            Submitted
          </span>

          <span className="font-medium">
            {assignment.submitted} / {assignment.totalStudents}
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <span className="text-xs text-slate-500">
          Click to edit
        </span>

        <ChevronRight className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />

      </div>

    </Card>
  );
}
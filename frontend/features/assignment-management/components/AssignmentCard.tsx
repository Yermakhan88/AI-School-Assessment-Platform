"use client";

import { CalendarDays, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { Assignment } from "../types/assignment.types";

interface Props {
  assignment: Assignment;
  active?: boolean;
  onClick?: () => void;
}

export default function AssignmentCard({
  assignment,
  active = false,
  onClick,
}: Props) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg ${
        active
          ? "border-blue-500 bg-blue-50"
          : ""
      }`}
    >
      <div className="flex items-start justify-between">

        <div>

          <h3 className="font-semibold">

            {assignment.title}

          </h3>

          <p className="mt-1 text-sm text-slate-500">

            {assignment.subject.name}

          </p>

        </div>

        <Badge
          variant={
            assignment.is_active
              ? "default"
              : "secondary"
          }
        >
          {assignment.is_active
            ? "Active"
            : "Inactive"}
        </Badge>

      </div>

      <div className="mt-5 space-y-3 text-sm">

        <div className="flex items-center gap-2">

          <User className="h-4 w-4" />

          <span>

            {assignment.teacher.full_name}

          </span>

        </div>

        <div className="flex items-center gap-2">

          <CalendarDays className="h-4 w-4" />

          <span>

            {assignment.due_date}

          </span>

        </div>

      </div>

    </Card>
  );
}
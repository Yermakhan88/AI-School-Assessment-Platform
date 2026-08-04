"use client";

import { CalendarDays, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { Submission } from "../types/submission.types";

interface Props {
  submission: Submission;
  active?: boolean;
  onClick?: () => void;
}

export default function SubmissionCard({
  submission,
  active = false,
  onClick,
}: Props) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-lg ${
        active ? "border-blue-500 bg-blue-50" : ""
      }`}
    >
      <div className="flex items-start justify-between">

        <div>

          <h3 className="font-semibold">
            {submission.assignment.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {submission.student.full_name}
          </p>

        </div>

        <Badge>
          {submission.status}
        </Badge>

      </div>

      <div className="mt-5 space-y-2 text-sm">

        <div className="flex items-center gap-2">

          <User className="h-4 w-4" />

          <span>
            {submission.student.full_name}
          </span>

        </div>

        <div className="flex items-center gap-2">

          <CalendarDays className="h-4 w-4" />

          <span>
            {submission.submitted_at}
          </span>

        </div>

      </div>

    </Card>
  );
}
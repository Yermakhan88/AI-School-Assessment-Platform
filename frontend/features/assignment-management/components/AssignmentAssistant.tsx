"use client";

import { Sparkles, BookOpen, Lightbulb, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Assignment } from "../types/assignment.types";

interface Props {
  assignment?: Assignment;
}

export default function AssignmentAssistant({
  assignment,
}: Props) {
  return (
    <div className="flex h-full flex-col bg-slate-50 p-5">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          🤖 AI Assistant
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          AI suggestions for your assignment
        </p>

      </div>

      {/* Assignment Quality */}

      <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <h3 className="font-semibold text-slate-800">
          Assignment Quality
        </h3>

        <p className="mt-3 text-4xl font-bold text-blue-600">
          92%
        </p>

        <p className="mt-3 text-sm text-slate-600">
          AI thinks this assignment is almost ready for publication.
        </p>

      </div>

      {/* Current Assignment */}

      <div className="mb-6 rounded-xl border bg-white p-4">

        <p className="text-xs uppercase tracking-wide text-slate-500">
          Current Assignment
        </p>

        <h3 className="mt-2 font-semibold text-slate-900">
          {assignment?.title ?? "No Assignment Selected"}
        </h3>

      </div>

      {/* Suggestions */}

      <div className="flex-1 space-y-3">

        <Button
          variant="default"
          className="w-full justify-start gap-2"
        >
          <Sparkles className="h-4 w-4" />
          Improve Description
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <BookOpen className="h-4 w-4" />
          Generate Rubric
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <Lightbulb className="h-4 w-4" />
          Generate Example
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <CheckCircle2 className="h-4 w-4" />
          Check Assignment
        </Button>

      </div>

      {/* Footer */}

      <div className="mt-6 rounded-xl border bg-white p-4">

        <p className="text-xs uppercase tracking-wide text-slate-500">
          AI Status
        </p>

        <p className="mt-2 text-sm font-medium text-green-600">
          Ready to assist
        </p>

      </div>

    </div>
  );
}
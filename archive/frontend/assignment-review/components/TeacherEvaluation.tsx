"use client";

import { Save, Send } from "lucide-react";

import WorkspaceSection from "@/shared/components/WorkspaceSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TeacherEvaluation() {
  return (
    <WorkspaceSection
      title="Teacher Evaluation"
      description="Final assessment by the teacher."
    >
      {/* Final Score */}

      <div className="mb-6">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Final Score
        </label>

        <Input
          type="number"
          min={0}
          max={100}
          placeholder="Enter final score"
        />

      </div>

      {/* Teacher Feedback */}

      <div className="mb-6">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Teacher Feedback
        </label>

        <textarea
          placeholder="Write your feedback..."
          className="
            min-h-[180px]
            w-full
            rounded-xl
            border
            border-slate-200
            p-4
            outline-none
            transition
            focus:border-blue-500
          "
        />

      </div>

      {/* Recommendation */}

      <div className="mb-6 rounded-xl border bg-slate-50 p-4">

        <p className="text-sm text-slate-500">

          Recommendation

        </p>

        <p className="mt-2 font-medium text-slate-800">

          Student demonstrates a good understanding of
          programming fundamentals. Recommended to continue
          with more advanced assignments.

        </p>

      </div>

      {/* Actions */}

      <div className="flex gap-3">

        <Button
          variant="outline"
          className="flex-1"
        >
          <Save className="mr-2 h-4 w-4" />

          Save Draft

        </Button>

        <Button
          className="flex-1"
        >
          <Send className="mr-2 h-4 w-4" />

          Publish Evaluation

        </Button>

      </div>

    </WorkspaceSection>
  );
}
"use client";

import { Save, Send } from "lucide-react";

import WorkspaceSection from "@/shared/components/WorkspaceSection";
import MetricCard from "@/shared/components/MetricCard";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Submission } from "../types/submission.types";

interface Props {
  submission?: Submission;
}

export default function TeacherReviewPanel({
  submission,
}: Props) {
  if (!submission) {
    return null;
  }

  return (
    <WorkspaceSection
      title="Teacher Review"
      description="Final evaluation"
    >

      <MetricCard
        title="AI Score"
        value={
          submission.ai_score !== null
            ? submission.ai_score.toString()
            : "-"
        }
      />

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium">

          Teacher Score

        </label>

        <Input
          defaultValue={
            submission.teacher_score ?? ""
          }
          placeholder="0 - 100"
        />

      </div>

      <div className="mt-6">

        <label className="mb-2 block text-sm font-medium">

          Teacher Feedback

        </label>

        <textarea
          defaultValue={
            submission.teacher_feedback ?? ""
          }
          className="min-h-[180px] w-full rounded-xl border p-4"
        />

      </div>

      <div className="mt-6 flex gap-3">

        <Button
          variant="outline"
          className="flex-1"
        >

          <Save className="mr-2 h-4 w-4" />

          Save

        </Button>

        <Button
          className="flex-1"
        >

          <Send className="mr-2 h-4 w-4" />

          Publish

        </Button>

      </div>

    </WorkspaceSection>
  );
}
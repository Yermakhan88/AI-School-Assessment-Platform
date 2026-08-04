"use client";

import WelcomeCard from "./WelcomeCard";
import CurrentAssignmentCard from "./CurrentAssignmentCard";
import ProgressCard from "./ProgressCard";
import RecommendationCard from "./RecommendationCard";
import FeedbackCard from "./FeedbackCard";
import UploadHomeworkCard from "./UploadHomeworkCard";

import { useStudentWorkspace } from "../hooks/useStudentWorkspace";

export default function StudentWorkspace() {

  const {
    assignment,
    submission,
    loading,
  } = useStudentWorkspace();

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-170px)] items-center justify-center">
        <p className="text-slate-500">
          Loading student dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <WelcomeCard />

      <div className="grid gap-6 xl:grid-cols-2">

        <CurrentAssignmentCard
          assignment={assignment}
        />

        <ProgressCard
          submission={submission}
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        <UploadHomeworkCard />

        <RecommendationCard />

      </div>

      <div className="grid gap-6">

        <FeedbackCard
          submission={submission}
        />

      </div>

    </div>
  );
}
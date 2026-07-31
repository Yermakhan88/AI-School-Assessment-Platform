"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  Submission,
  submissionService,
} from "@/services/submission.service";

export function useSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSubmissions = async () => {
    try {
      setLoading(true);

      const data = await submissionService.getAll();

      setSubmissions(data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  const uploadSubmission = async (
    formData: FormData
  ) => {
    try {
      await submissionService.upload(formData);

      await loadSubmissions();

      toast.success("Homework uploaded successfully");
    } catch (error) {
      console.error(error);

      toast.error("Upload failed");
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  return {
    submissions,
    loading,
    uploadSubmission,
    refreshSubmissions: loadSubmissions,
  };
}
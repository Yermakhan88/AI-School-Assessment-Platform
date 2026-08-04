"use client";

import { useEffect, useState } from "react";

import { SubmissionService } from "../services/submission.service";

import { Submission } from "../types/submission.types";

export function useSubmissions() {

  const [submissions, setSubmissions] =
    useState<Submission[]>([]);

  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function loadSubmissions() {

    try {

      setLoading(true);

      const data =
        await SubmissionService.getAll();

      setSubmissions(data);

      if (data.length > 0) {

        setSelectedSubmission(data[0]);

      }

    } catch (err: any) {
        console.error("Submission Error:", err);

        if (err?.response) {
            console.error("Status:", err.response.status);
            console.error("Data:", err.response.data);
        }
      
      setError("Failed to load submissions.");
    

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadSubmissions();

  }, []);

  return {

    submissions,

    selectedSubmission,

    setSelectedSubmission,

    loading,

    error,

    refresh: loadSubmissions,

  };

}
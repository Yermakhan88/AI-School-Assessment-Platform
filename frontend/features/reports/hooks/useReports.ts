"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getReportStatistics } from "../api/reportApi";
import { ReportStatistics } from "../types";

export function useReports() {
  const [statistics, setStatistics] =
    useState<ReportStatistics | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadReports() {
    try {
      setLoading(true);

      const data =
        await getReportStatistics();

      setStatistics(data);

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load reports."
      );

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReports();
  }, []);

  return {
    statistics,
    loading,
    refreshReports: loadReports,
  };
}
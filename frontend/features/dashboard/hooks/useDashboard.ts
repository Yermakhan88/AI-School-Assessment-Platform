"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

import { getDashboardStats } from "../api/dashboardApi";
import { DashboardStats } from "../types";

export function useDashboard() {
  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadStats() {
    try {
      setLoading(true);

      const data =
        await getDashboardStats();

      setStats(data);

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to load dashboard statistics.",
      );

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStats();
  }, []);

  return {
    stats,
    loading,
    refreshDashboard: loadStats,
  };
}
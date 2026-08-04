"use client";

import { useEffect, useState } from "react";

import { DashboardService } from "../services/dashboard.service";

import { DashboardStats } from "../types/dashboard.types";

export function useDashboard() {
  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  async function loadDashboard() {
    try {
      setLoading(true);

      const data =
        await DashboardService.getStats();

      setStats(data);

    } catch {

      setError(
        "Failed to load dashboard."
      );

    } finally {

      setLoading(false);

    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    stats,
    loading,
    error,
    refresh: loadDashboard,
  };
}
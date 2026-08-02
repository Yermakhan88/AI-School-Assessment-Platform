"use client";

import { useEffect, useState } from "react";

import {
  getSettings,
  Settings,
} from "../api/settingsApi";

export function useSettings() {
  const [settings, setSettings] =
    useState<Settings | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getSettings();

        setSettings(data);

      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    settings,
    loading,
  };
}
"use client";

import { useCallback, useEffect, useState } from "react";

import { MaterialService } from "../services/material.service";

import { Material } from "../types/material.types";

export function useMaterials() {
  const [materials, setMaterials] =
    useState<Material[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [analyzing, setAnalyzing] =
    useState(false);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);

      const data =
        await MaterialService.getAll();

      setMaterials(data);

    } finally {
      setLoading(false);
    }
  }, []);

  async function analyze(
    materialId: number,
  ) {
    try {
      setAnalyzing(true);

      await MaterialService.analyze(
        materialId,
      );

      await refresh();

    } finally {
      setAnalyzing(false);
    }
  }

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    materials,
    loading,
    analyzing,
    refresh,
    analyze,
  };
}
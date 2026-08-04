"use client";

import { useEffect, useState } from "react";

import { MaterialService } from "../services/material.service";

import { Material } from "../types/material.types";

export function useMaterials() {

  const [materials, setMaterials] =
    useState<Material[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function refresh() {

    try {

      setLoading(true);

      const data =
        await MaterialService.getAll();

      setMaterials(data);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    refresh();

  }, []);

  return {

    materials,

    loading,

    refresh,

  };

}
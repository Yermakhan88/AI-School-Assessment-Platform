"use client";

import { useState } from "react";

import MaterialUploader from "./MaterialUploader";
import MaterialLibrary from "./MaterialLibrary";
import MaterialPreview from "./MaterialPreview";

import { Material } from "../types/material.types";

export default function MaterialWorkspace() {
  const [selectedMaterial, setSelectedMaterial] =
    useState<Material | null>(null);

  return (
    <div className="grid gap-6 xl:grid-cols-12">

      {/* Upload */}

      <div className="xl:col-span-3">

        <MaterialUploader />

      </div>

      {/* Library */}

      <div className="xl:col-span-4">

        <MaterialLibrary
          onSelect={setSelectedMaterial}
          selectedId={selectedMaterial?.id}
        />

      </div>

      {/* Preview */}

      <div className="xl:col-span-5">

        <MaterialPreview
          material={selectedMaterial ?? undefined}
        />

      </div>

    </div>
  );
}
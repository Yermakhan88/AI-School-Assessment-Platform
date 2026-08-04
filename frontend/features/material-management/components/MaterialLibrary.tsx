"use client";

import { useMaterials } from "../hooks/useMaterials";
import { Material } from "../types/material.types";

interface Props {
  selectedId?: number;
  onSelect: (material: Material) => void;
}

export default function MaterialLibrary({
  selectedId,
  onSelect,
}: Props) {
  const {
    materials,
    loading,
  } = useMaterials();

  if (loading) {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Material Library
      </h2>

      <div className="space-y-3">

        {materials.map((material) => (

          <button
            key={material.id}
            onClick={() => onSelect(material)}
            className={`w-full rounded-xl border p-4 text-left transition-all hover:border-blue-500 hover:bg-blue-50 ${
              selectedId === material.id
                ? "border-blue-500 bg-blue-50"
                : ""
            }`}
          >

            <h3 className="font-semibold">
              {material.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {material.filename}
            </p>

            <div className="mt-3 flex items-center justify-between">

              <span className="text-xs text-slate-500">
                Grade {material.grade}
              </span>

              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  material.is_processed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {material.is_processed
                  ? "AI Ready"
                  : "Uploaded"}
              </span>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}
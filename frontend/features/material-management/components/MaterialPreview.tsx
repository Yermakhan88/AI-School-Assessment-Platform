"use client";

import { useState } from "react";

import {
  Sparkles,
  FileText,
  GraduationCap,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Material } from "../types/material.types";
import { useMaterials } from "../hooks/useMaterials";

interface Props {
  material?: Material;
}

export default function MaterialPreview({
  material,
}: Props) {
  const {
    analyze,
    analyzing,
  } = useMaterials();

  const [result, setResult] =
    useState<Material | undefined>(
      material,
    );

  if (!material) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl border bg-white">
        <p className="text-slate-500">
          Select material from the library.
        </p>
      </div>
    );
  }

  async function handleAnalyze() {
    await analyze(material.id);

    setResult({
      ...material,
      is_processed: true,
    });
  }

  const current =
    result ?? material;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        {current.title}
      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">
          <FileText size={18} />
          <span>{current.filename}</span>
        </div>

        <div className="flex items-center gap-3">
          <GraduationCap size={18} />
          <span>
            Grade {current.grade}
          </span>
        </div>

        <span
          className={`inline-block rounded-full px-3 py-1 text-sm ${
            current.is_processed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {current.is_processed
            ? "AI Ready"
            : "Uploaded"}
        </span>

      </div>

      <Button
        className="mt-8 w-full"
        onClick={handleAnalyze}
        disabled={analyzing}
      >
        {analyzing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Analyze with AI
          </>
        )}
      </Button>

      <div className="mt-8 rounded-xl border border-dashed p-5">

        <h3 className="font-semibold">
          AI Result
        </h3>

        {current.is_processed ? (
          <div className="mt-4 space-y-4">

            <div>
              <p className="text-xs uppercase text-slate-500">
                Topic
              </p>

              <p>
                {current.topic || "-"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">
                Learning Objectives
              </p>

              <pre className="whitespace-pre-wrap text-sm">
                {current.learning_objectives || "-"}
              </pre>
            </div>

            <div>
              <p className="text-xs uppercase text-slate-500">
                Bloom Level
              </p>

              <p>
                {current.bloom_level || "-"}
              </p>
            </div>

          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-500">
            Click "Analyze with AI" to analyze
            the uploaded material.
          </p>
        )}

      </div>

    </div>
  );
}
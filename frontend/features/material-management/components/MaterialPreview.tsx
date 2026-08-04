"use client";

import { Sparkles, FileText, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Material } from "../types/material.types";

interface Props {
  material?: Material;
}

export default function MaterialPreview({
  material,
}: Props) {

  if (!material) {

    return (
      <div className="flex h-full items-center justify-center rounded-2xl border bg-white">
        <p className="text-slate-500">
          Select material from the library.
        </p>
      </div>
    );

  }

  async function handleGenerate() {

    alert(
      "Next Sprint:\nAI Assignment Generator"
    );

  }

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">

        {material.title}

      </h2>

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3">

          <FileText size={18} />

          <span>

            {material.filename}

          </span>

        </div>

        <div className="flex items-center gap-3">

          <GraduationCap size={18} />

          <span>

            Grade {material.grade}

          </span>

        </div>

        <div>

          <span
            className={`rounded-full px-3 py-1 text-sm ${
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

      </div>

      <div className="mt-10">

        <Button
          className="w-full"
          onClick={handleGenerate}
        >

          <Sparkles className="mr-2 h-4 w-4" />

          Generate Assignment with AI

        </Button>

      </div>

      <div className="mt-8 rounded-xl border border-dashed p-5">

        <h3 className="font-semibold">

          AI Result

        </h3>

        <p className="mt-3 text-sm text-slate-500">

          Topic detection

          <br />

          Bloom level

          <br />

          Assignment

          <br />

          Rubric

        </p>

      </div>

    </div>

  );

}
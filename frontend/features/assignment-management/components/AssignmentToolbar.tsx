"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AssignmentToolbar() {

  return (

    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold">

          Assignment Management

        </h1>

        <p className="text-slate-500">

          Create and manage assignments.

        </p>

      </div>

      <div className="flex gap-3">

        <Input placeholder="Search assignment..." />

        <Button>

          <Plus className="mr-2 h-4 w-4"/>

          New Assignment

        </Button>

      </div>

    </div>

  );

}
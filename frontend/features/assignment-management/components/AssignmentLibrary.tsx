"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";

import AssignmentCard from "./AssignmentCard";

import { assignments } from "../mock/assignments";

export default function AssignmentLibrary() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return assignments.filter((assignment) =>
      assignment.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const active = filtered.filter(
    (item) => item.status === "ACTIVE"
  );

  const draft = filtered.filter(
    (item) => item.status === "DRAFT"
  );

  const archived = filtered.filter(
    (item) => item.status === "ARCHIVED"
  );

  return (
    <div className="flex h-full flex-col">

      {/* Header */}

      <div className="border-b p-5">

        <h2 className="text-xl font-semibold">
          Assignment Library
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage learning activities
        </p>

        <Input
          className="mt-4"
          placeholder="Search assignment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Content */}

      <div className="flex-1 overflow-auto p-5">

        {/* ACTIVE */}

        <Section
          title="🟢 Active"
          count={active.length}
        >
          {active.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
            />
          ))}
        </Section>

        {/* DRAFT */}

        <Section
          title="🟡 Draft"
          count={draft.length}
        >
          {draft.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
            />
          ))}
        </Section>

        {/* ARCHIVED */}

        <Section
          title="⚪ Archived"
          count={archived.length}
        >
          {archived.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
            />
          ))}
        </Section>

      </div>

    </div>
  );
}

interface SectionProps {
  title: string;
  count: number;
  children: React.ReactNode;
}

function Section({
  title,
  count,
  children,
}: SectionProps) {
  return (
    <div className="mb-8">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="font-semibold">
          {title}
        </h3>

        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">
          {count}
        </span>

      </div>

      <div className="space-y-3">
        {children}
      </div>

    </div>
  );
}
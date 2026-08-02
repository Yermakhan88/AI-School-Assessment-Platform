"use client";

import { ReactNode } from "react";

import Sidebar from "@/features/teacher-workspace/components/Sidebar";
import Topbar from "@/features/teacher-workspace/components/Topbar";

interface Props {
  children: ReactNode;
}

export default function TeacherWorkspaceLayout({
  children,
}: Props) {
  return (
    <div className="flex h-screen bg-slate-50">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Area */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Top Navigation */}

        <Topbar />

        {/* Workspace */}

        <main className="flex-1 overflow-auto p-8">

          {children}

        </main>

      </div>

    </div>
  );
}
"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      <div>

        <h1 className="text-2xl font-bold text-slate-900">
          Teacher Workspace
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back! Continue your work.
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
          />

        </div>

        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">

          <Bell size={20} />

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            E
          </div>

          <div>

            <p className="font-semibold">
              Ermek
            </p>

            <p className="text-xs text-slate-500">
              Teacher
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
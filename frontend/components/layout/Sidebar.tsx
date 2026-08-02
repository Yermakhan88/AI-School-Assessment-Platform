"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          AI School
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Assessment Platform
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {navigation.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all

              ${
                active
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </Link>

          );
        })}

      </nav>

      <div className="border-t border-slate-700 p-4">

        <p className="text-xs text-slate-500 text-center">
          Version 1.0
        </p>

      </div>

    </aside>
  );
}
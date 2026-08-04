"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Home",
    href: "/dashboard/teacher",
    icon: Home,
  },
  {
    title: "Assignment Management",
    href: "/dashboard/teacher/assignments",
    icon: BookOpen,
  },
  {
    title: "Submission Review",
    href: "/dashboard/teacher/review",
    icon: ClipboardCheck,
  },
  {
    title: "Reports",
    href: "/dashboard/teacher/reports",
    icon: BarChart3,
  },
  {
    title: "Profile",
    href: "/dashboard/teacher/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="border-b border-slate-200 p-8">

        <h1 className="text-2xl font-bold text-blue-600">
          AI School
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Assessment Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {menu.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >

              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>

          );

        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-5">

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-4 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >

          <Settings size={20} />

          <span className="font-medium">
            Settings
          </span>

        </Link>

      </div>

    </aside>
  );
}
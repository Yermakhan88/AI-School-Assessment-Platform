import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  ClipboardList,
  Bot,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Teachers",
    icon: GraduationCap,
  },
  {
    title: "Students",
    icon: Users,
  },
  {
    title: "Subjects",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    icon: ClipboardList,
  },
  {
    title: "AI Assessment",
    icon: Bot,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    icon: FileText,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
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

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="w-full flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </button>
          );
        })}

      </nav>

      <div className="p-4 border-t border-slate-700 text-center text-xs text-slate-400">
        Version 1.0
      </div>

    </aside>
  );
}
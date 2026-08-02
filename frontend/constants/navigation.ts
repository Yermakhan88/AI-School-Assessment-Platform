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

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Teachers",
    href: "/teachers",
    icon: GraduationCap,
  },
  {
    title: "Students",
    href: "/students",
    icon: Users,
  },
  {
    title: "Subjects",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    href: "/assignments",
    icon: ClipboardList,
  },
  {
    title: "AI Assessment",
    href: "/dashboard/teacher/submissions",
    icon: Bot,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
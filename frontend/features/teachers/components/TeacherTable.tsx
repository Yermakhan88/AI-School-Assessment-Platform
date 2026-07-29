"use client";

import { Teacher } from "@/services/teacher.service";

interface TeacherTableProps {
  teachers: Teacher[];
  loading: boolean;
}

export default function TeacherTable({
  teachers,
  loading,
}: TeacherTableProps) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-6">
        Loading teachers...
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Subject</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <tr
              key={teacher.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {teacher.full_name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .toUpperCase()}
                  </div>

                  <span>{teacher.full_name}</span>
                </div>
              </td>

              <td className="p-4">
                {teacher.email}
              </td>

              <td className="p-4">
                {teacher.subject}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    teacher.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {teacher.is_active ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
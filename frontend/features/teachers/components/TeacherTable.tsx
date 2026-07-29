"use client";
import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import TeacherDialog from "./TeacherDialog";

import {
  Teacher,
  UpdateTeacherDto,
} from "@/services/teacher.service";

interface TeacherTableProps {
  teachers: Teacher[];
  loading: boolean;

  onTeacherUpdated: (
    id: number,
    teacher: UpdateTeacherDto
  ) => Promise<void>;

  onTeacherDeleted: (
    id: number
  ) => Promise<void>;
}

export default function TeacherTable({
  teachers,
  loading,
  onTeacherUpdated,
  onTeacherDeleted,
}: TeacherTableProps) {
  if (loading) {
  return (
    <LoadingState
      message="Loading teachers..."
    />
  );
}

if (teachers.length === 0) {
  return (
    <EmptyState
      title="No teachers found"
    />
  );
}

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Subject</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
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
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    teacher.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {teacher.is_active ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-2">

                  <TeacherDialog
                    mode="edit"
                    teacher={teacher}
                    onTeacherUpdated={onTeacherUpdated}
                    trigger={
                      <Button
                        variant="outline"
                        size="sm"
                      >
                        ✏️
                      </Button>
                    }
                  />

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                      >
                        🗑️
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete Teacher
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                          Are you sure you want to delete{" "}
                          <strong>{teacher.full_name}</strong>?

                          <br />
                          <br />

                          This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                          onClick={() =>
                            onTeacherDeleted(teacher.id)
                          }
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
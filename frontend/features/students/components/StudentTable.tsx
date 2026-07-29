"use client";

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

import StudentDialog from "./StudentDialog";

import {
  Student,
  UpdateStudentDto,
} from "@/services/student.service";

interface StudentTableProps {
  students: Student[];
  loading: boolean;

  onStudentUpdated: (
    id: number,
    student: UpdateStudentDto
  ) => Promise<void>;

  onStudentDeleted: (
    id: number
  ) => Promise<void>;
}

export default function StudentTable({
  students,
  loading,
  onStudentUpdated,
  onStudentDeleted,
}: StudentTableProps) {
  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-6">
        Loading students...
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center text-slate-500">
        No students found
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Group</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {student.full_name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .toUpperCase()}
                  </div>

                  <span>{student.full_name}</span>
                </div>
              </td>

              <td className="p-4">
                {student.email}
              </td>

              <td className="p-4">
                {student.phone}
              </td>

              <td className="p-4">
                {student.group_name}
              </td>

              <td className="p-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    student.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.is_active
                    ? "Active"
                    : "Inactive"}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <StudentDialog
                    mode="edit"
                    student={student}
                    onStudentUpdated={onStudentUpdated}
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
                          Delete Student
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                          Are you sure you want to delete{" "}
                          <strong>
                            {student.full_name}
                          </strong>
                          ?
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
                            onStudentDeleted(student.id)
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
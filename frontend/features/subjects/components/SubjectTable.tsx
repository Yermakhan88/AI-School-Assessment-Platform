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

import LoadingState from "@/components/common/LoadingState";
import EmptyState from "@/components/common/EmptyState";

import SubjectDialog from "./SubjectDialog";

import {
  Subject,
  UpdateSubjectDto,
} from "@/services/subject.service";

interface SubjectTableProps {
  subjects: Subject[];
  loading: boolean;

  onSubjectUpdated: (
    id: number,
    subject: UpdateSubjectDto
  ) => Promise<void>;

  onSubjectDeleted: (
    id: number
  ) => Promise<void>;
}

export default function SubjectTable({
  subjects,
  loading,
  onSubjectUpdated,
  onSubjectDeleted,
}: SubjectTableProps) {
  if (loading) {
    return (
      <LoadingState message="Loading subjects..." />
    );
  }

  if (subjects.length === 0) {
    return (
      <EmptyState title="No subjects found" />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Code</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject) => (
            <tr
              key={subject.id}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4 font-medium">
                {subject.name}
              </td>

              <td className="p-4">
                {subject.code}
              </td>

              <td className="p-4">
                {subject.description ?? "-"}
              </td>

              <td className="p-4">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    subject.is_active
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {subject.is_active
                    ? "Active"
                    : "Inactive"}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <SubjectDialog
                    mode="edit"
                    subject={subject}
                    onSubjectUpdated={onSubjectUpdated}
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
                          Delete Subject
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                          Are you sure you want to delete{" "}
                          <strong>{subject.name}</strong>?
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
                            onSubjectDeleted(subject.id)
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
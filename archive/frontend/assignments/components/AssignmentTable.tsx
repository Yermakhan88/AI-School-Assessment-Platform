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

import AssignmentDialog from "./AssignmentDialog";

import {
  Assignment,
  UpdateAssignmentDto,
} from "@/services/assignment.service";

import { Teacher } from "@/services/teacher.service";
import { Subject } from "@/services/subject.service";

interface AssignmentTableProps {
  assignments: Assignment[];
  teachers: Teacher[];
  subjects: Subject[];
  loading: boolean;

  onAssignmentUpdated: (
    id: number,
    assignment: UpdateAssignmentDto
  ) => Promise<void>;

  onAssignmentDeleted: (
    id: number
  ) => Promise<void>;
}

export default function AssignmentTable({
  assignments,
  teachers,
  subjects,
  loading,
  onAssignmentUpdated,
  onAssignmentDeleted,
}: AssignmentTableProps) {
  if (loading) {
    return (
      <LoadingState message="Loading assignments..." />
    );
  }

  if (assignments.length === 0) {
    return (
      <EmptyState title="No assignments found" />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Teacher</th>
            <th className="p-4 text-left">Subject</th>
            <th className="p-4 text-left">Due Date</th>
            <th className="p-4 text-left">Max Score</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {assignments.map((assignment) => {
            const teacher = teachers.find(
              (t) => t.id === assignment.teacher_id
            );

            const subject = subjects.find(
              (s) => s.id === assignment.subject_id
            );

            return (
              <tr
                key={assignment.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {assignment.title}
                </td>

                <td className="p-4">
                  {teacher?.full_name ?? "-"}
                </td>

                <td className="p-4">
                  {subject?.name ?? "-"}
                </td>

                <td className="p-4">
                  {assignment.due_date}
                </td>

                <td className="p-4">
                  {assignment.max_score}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      assignment.is_active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {assignment.is_active
                      ? "Active"
                      : "Inactive"}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <AssignmentDialog
                      mode="edit"
                      assignment={assignment}
                      teachers={teachers}
                      subjects={subjects}
                      onAssignmentUpdated={onAssignmentUpdated}
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
                            Delete Assignment
                          </AlertDialogTitle>

                          <AlertDialogDescription>
                            Are you sure you want to delete
                            <strong>
                              {" "}
                              {assignment.title}
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
                              onAssignmentDeleted(
                                assignment.id
                              )
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
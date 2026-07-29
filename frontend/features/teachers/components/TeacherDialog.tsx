"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import TeacherForm from "./TeacherForm";

export default function TeacherDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          + Add Teacher
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>
          <DialogTitle>
            Add Teacher
          </DialogTitle>
        </DialogHeader>

        <TeacherForm />

      </DialogContent>
    </Dialog>
  );
}
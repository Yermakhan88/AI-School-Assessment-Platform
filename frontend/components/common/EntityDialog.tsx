"use client";

import { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EntityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;

  children: ReactNode;
}

export default function EntityDialog({
  open,
  onOpenChange,
  title,
  children,
}: EntityDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>

            {title}

          </DialogTitle>

        </DialogHeader>

        {children}

      </DialogContent>
    </Dialog>
  );
}
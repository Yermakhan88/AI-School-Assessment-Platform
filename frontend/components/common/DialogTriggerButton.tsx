"use client";

import { Button } from "@/components/ui/button";

interface DialogTriggerButtonProps {
  title: string;
}

export default function DialogTriggerButton({
  title,
}: DialogTriggerButtonProps) {
  return (
    <Button>
      {title}
    </Button>
  );
}
"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface StudentCardProps {
  name: string;
  status: "AI_READY" | "WAITING" | "NO_SUBMISSION";
  active?: boolean;
  onClick?: () => void;
}

export default function StudentCard({
  name,
  status,
  active,
  onClick,
}: StudentCardProps) {
  return (
    <Card
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-2xl
        p-4
        transition-all
        hover:shadow-md

        ${
          active
            ? "border-blue-500 bg-blue-50"
            : ""
        }
      `}
    >
      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-semibold">
            {name}
          </h3>

        </div>

        <Badge>

          {status.replace("_", " ")}

        </Badge>

      </div>

    </Card>
  );
}
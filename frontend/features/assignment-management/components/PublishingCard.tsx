"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PublishingCard() {
  return (
    <Card className="rounded-2xl p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Publishing
      </h2>

      <div className="flex justify-end gap-3">

        <Button variant="outline">
          Save Draft
        </Button>

        <Button variant="outline">
          Preview
        </Button>

        <Button>
          Publish
        </Button>

      </div>

    </Card>
  );
}
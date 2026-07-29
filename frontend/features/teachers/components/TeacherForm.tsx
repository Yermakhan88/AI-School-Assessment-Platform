"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TeacherForm() {
  return (
    <form className="space-y-5">

      <div>
        <label className="text-sm font-medium">
          Full Name
        </label>

        <Input
          placeholder="Teacher full name"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Email
        </label>

        <Input
          type="email"
          placeholder="teacher@email.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Subject
        </label>

        <Input
          placeholder="Informatics"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Status
        </label>

        <select className="w-full rounded-md border border-input bg-background px-3 py-2">

          <option>Active</option>

          <option>Inactive</option>

        </select>

      </div>

      <Button className="w-full">
        Save Teacher
      </Button>

    </form>
  );
}
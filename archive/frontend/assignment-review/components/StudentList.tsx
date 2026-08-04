"use client";

import StudentCard from "./StudentCard";

const students = [

  {
    id: 1,
    name: "Алибек Ахметов",
    status: "AI_READY",
  },

  {
    id: 2,
    name: "Айдана Серік",
    status: "WAITING",
  },

  {
    id: 3,
    name: "Нұржан Ермек",
    status: "NO_SUBMISSION",
  },

];

export default function StudentList() {
  return (
    <div className="flex h-full flex-col">

      <div className="border-b p-5">

        <h2 className="text-xl font-semibold">

          Students

        </h2>

      </div>

      <div className="flex-1 space-y-3 overflow-auto p-5">

        {students.map((student) => (

          <StudentCard
            key={student.id}
            name={student.name}
            status={student.status as any}
          />

        ))}

      </div>

    </div>
  );
}
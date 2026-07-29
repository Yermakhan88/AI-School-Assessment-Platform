import { teachers } from "../data/teachers";

export default function TeacherTable() {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Email</th>

            <th className="p-4 text-left">Subject</th>

            <th className="p-4 text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {teachers.map((teacher) => (

            <tr
              key={teacher.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="p-4">
                {teacher.fullName}
              </td>

              <td className="p-4">
                {teacher.email}
              </td>

              <td className="p-4">
                {teacher.subject}
              </td>

              <td className="p-4">
                {teacher.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        AI School
      </h1>

      <nav className="space-y-3">

        <a className="block hover:text-blue-400 cursor-pointer">
          Dashboard
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Teachers
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Students
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Subjects
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Assignments
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          AI Assessment
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Analytics
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Reports
        </a>

        <a className="block hover:text-blue-400 cursor-pointer">
          Settings
        </a>

      </nav>
    </aside>
  )
}
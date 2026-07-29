import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";

export default function Home() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            Welcome back 👋
          </h1>

          <p className="text-slate-500 mt-2">
            AI School Assessment Platform Dashboard
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">

          <StatCard
            title="Students"
            value="245"
          />

          <StatCard
            title="Teachers"
            value="18"
          />

          <StatCard
            title="Assignments"
            value="36"
          />

          <StatCard
            title="AI Evaluations"
            value="1 580"
          />

        </div>

      </div>

    </DashboardLayout>
  );
}
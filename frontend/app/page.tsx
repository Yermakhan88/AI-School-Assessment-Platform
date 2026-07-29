import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { dashboardStats } from "@/constants/dashboard";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            AI School Assessment Platform Dashboard
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {dashboardStats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
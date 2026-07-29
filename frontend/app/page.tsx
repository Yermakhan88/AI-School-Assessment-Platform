import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold">
        AI School Assessment Platform
      </h1>

      <p className="mt-4 text-slate-600">
        Welcome to your dashboard.
      </p>

    </DashboardLayout>
  );
}
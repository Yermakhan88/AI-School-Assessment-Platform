"use client";

interface MetricCardProps {
  title: string;
  value: string;
  color?: string;
}

export default function MetricCard({
  title,
  value,
  color = "text-blue-600",
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border bg-blue-50 p-5">

      <p className="text-sm text-slate-600">
        {title}
      </p>

      <h2 className={`mt-3 text-5xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}
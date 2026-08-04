"use client";

interface InfoCardProps {
  title: string;
  value: string;
}

export default function InfoCard({
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4 transition hover:bg-slate-100">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-slate-900">
        {value}
      </h3>

    </div>
  );
}
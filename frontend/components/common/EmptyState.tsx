interface EmptyStateProps {
  title?: string;
}

export default function EmptyState({
  title = "No data found",
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border bg-white p-10 shadow-sm">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-700">
          {title}
        </h3>

        <p className="mt-2 text-slate-500">
          Try changing your search or add a new record.
        </p>
      </div>
    </div>
  );
}
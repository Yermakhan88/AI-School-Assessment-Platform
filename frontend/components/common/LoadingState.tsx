interface LoadingStateProps {
  message?: string;
}

export default function LoadingState({
  message = "Loading...",
}: LoadingStateProps) {
  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm">
      <div className="flex items-center justify-center">
        <div className="text-slate-500 text-lg font-medium">
          {message}
        </div>
      </div>
    </div>
  );
}
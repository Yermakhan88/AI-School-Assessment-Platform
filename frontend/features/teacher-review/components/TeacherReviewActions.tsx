"use client";

interface Props {
  loading: boolean;

  onSave: () => void;

  onApprove: () => void;

  onReject: () => void;
}

export default function TeacherReviewActions({
  loading,
  onSave,
  onApprove,
  onReject,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Actions
      </h2>

      <div className="space-y-3">

        <button
          onClick={onApprove}
          disabled={loading}
          className="w-full rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700 disabled:opacity-50"
        >
          ✅ Approve AI Review
        </button>

        <button
          onClick={onReject}
          disabled={loading}
          className="w-full rounded-lg bg-red-600 px-4 py-3 text-white hover:bg-red-700 disabled:opacity-50"
        >
          ❌ Reject AI Review
        </button>

        <button
          onClick={onSave}
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          💾 Save Teacher Review
        </button>

      </div>

    </div>
  );
}
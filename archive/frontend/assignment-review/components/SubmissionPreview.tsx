"use client";

export default function SubmissionPreview() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold">

        solution.py

      </h1>

      <div className="mt-8 rounded-xl border bg-white p-6">

<pre
    className="
        overflow-auto
        rounded-xl
        bg-slate-900
        p-6
        text-green-400
    "
>
{`def factorial(n):

    if n == 0:

        return 1

    return n * factorial(n-1)
`}
</pre>

      </div>

    </div>
  );
}
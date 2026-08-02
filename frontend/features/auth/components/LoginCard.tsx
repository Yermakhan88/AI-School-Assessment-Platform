"use client";

import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-xl">

      <div className="mb-8 text-center">

        <div className="mb-4 text-5xl">
          🤖
        </div>

        <h1 className="text-3xl font-bold">
          AI School Assessment Platform
        </h1>

        <p className="mt-3 text-slate-500">
          Sign in to continue
        </p>

      </div>

      <LoginForm />

    </div>
  );
}
"use client";

import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

      <h1 className="text-3xl font-bold">
        AI School Platform
      </h1>

      <p className="mt-2 text-slate-500">
        Sign in to continue
      </p>

      <div className="mt-8">
        <LoginForm />
      </div>

    </div>
  );
}
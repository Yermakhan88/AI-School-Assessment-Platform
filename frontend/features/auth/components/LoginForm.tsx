"use client";

import { useState } from "react";

import { useAuth } from "../hooks/useAuth";

export default function LoginForm() {
  const { signIn, loading } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSubmit(
    e: React.FormEvent,
  ) {
    e.preventDefault();

    await signIn({
      email,
      password,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>

        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          placeholder="teacher@example.com"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          placeholder="********"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading
          ? "Signing in..."
          : "Sign In"}
      </button>

    </form>
  );
}
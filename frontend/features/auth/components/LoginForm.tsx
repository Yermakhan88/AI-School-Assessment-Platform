"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useAuth } from "../hooks/useAuth";
import { useCurrentUser } from "@/shared/providers/AuthProvider";

export default function LoginForm() {
  const router = useRouter();

  const { login, loading } = useAuth();

  const { refresh } = useCurrentUser();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: FormEvent
  ) {
    e.preventDefault();

    console.log("LOGIN SUBMIT");

    setError("");

    try {
      await login(
        email,
        password
      );

      await refresh();

      router.push(
        "/dashboard/teacher"
      );

    } catch {

      setError(
        "Invalid email or password"
      );

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      {error && (

        <p className="text-sm text-red-600">

          {error}

        </p>

      )}

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >

        {loading
          ? "Signing In..."
          : "Sign In"}

      </Button>

    </form>

  );

}
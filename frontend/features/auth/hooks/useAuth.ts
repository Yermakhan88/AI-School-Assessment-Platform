"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { login } from "../api/authApi";
import { LoginRequest } from "../types";

export function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function signIn(
    credentials: LoginRequest,
  ) {
    try {
      setLoading(true);

      const response = await login(
        credentials,
      );

      localStorage.setItem(
        "access_token",
        response.access_token,
      );

      toast.success(
        "Login successful.",
      );

      router.push(
        "/dashboard",
      );

    } catch (error) {
      console.error(error);

      toast.error(
        "Invalid email or password.",
      );

    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem(
      "access_token",
    );

    router.push("/");
  }

  function getToken() {
    if (typeof window === "undefined") {
      return null;
    }

    return localStorage.getItem(
      "access_token",
    );
  }

  return {
    loading,

    signIn,

    logout,

    getToken,
  };
}
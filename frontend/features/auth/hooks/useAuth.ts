"use client";

import { useState } from "react";

import { AuthService } from "../services/auth.service";

import { saveToken } from "@/lib/api/token";

export function useAuth() {
  const [loading, setLoading] = useState(false);

  async function login(
    email: string,
    password: string
  ) {
    try {
      setLoading(true);

      const response =
        await AuthService.login({
          email,
          password,
        });

      saveToken(response.access_token);

      return response;

    } finally {

      setLoading(false);

    }
  }

  async function currentUser() {
    return await AuthService.currentUser();
  }

  return {
    login,
    currentUser,
    loading,
  };
}
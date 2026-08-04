"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { CurrentUser } from "@/features/auth/types/auth.types";

interface AuthContextType {
  user: CurrentUser | null;
  loading: boolean;
  refresh: () => Promise<void>;
  logout: () => void;
}

const AuthContext =
  createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { currentUser } = useAuth();

  const [user, setUser] =
    useState<CurrentUser | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function refresh() {
    try {
      const me = await currentUser();

      setUser(me);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("access_token");

    setUser(null);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refresh,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useCurrentUser() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useCurrentUser must be used inside AuthProvider."
    );
  }

  return context;
}
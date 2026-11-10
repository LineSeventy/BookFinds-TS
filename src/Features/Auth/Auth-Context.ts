import { createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";

type AuthContextValue = {
  session: Session | null;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside <AuthProvider>");
  return ctx;
}

import React, { useState, type FormEvent } from "react";
import { useAuth } from "../Features/Auth/Auth-Context";
import { Link, Navigate, useLocation } from "react-router";
import { supabase } from "../Lib/supabaseClient";

export function LoginPage() {
  const { session } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/profile";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (session) return <Navigate to={from} replace />;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setErrorMessage(error.message);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-12 w-[calc(100%-3rem)] max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Log in to continue discovering your next favorite book.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Log In
          </button>

          {errorMessage && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
            >
              {errorMessage}
            </p>
          )}

          <p className="text-center text-sm text-slate-600">
            No account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

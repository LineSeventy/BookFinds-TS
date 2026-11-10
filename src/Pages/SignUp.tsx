import React, { useState, type FormEvent } from "react";
import { supabase } from "../lib/supabaseClient";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ConfirmEmail from "../Features/Components/ConfirmEmail";

type Status = "idle" | "loading" | "check-email" | "error";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/Profile`,
      },
    });
    if (error) {
      setErrorMessage(error.message);
      setStatus("error");
      return;
    }
    setStatus(data.session ? "idle" : "check-email");
  }
  if (status === "check-email") {
    return (
      <>
        <ConfirmEmail />
      </>
    );
  }
  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-12 w-[calc(100%-3rem)] max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Sign up to save and discover your favorite books.
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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Creating account..." : "Create account"}
          </button>

          {errorMessage && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
            >
              {errorMessage}
            </p>
          )}
        </div>
      </form>
      <Footer />
    </>
  );
};

export default SignUp;

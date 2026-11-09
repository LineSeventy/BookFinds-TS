import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../lib/supabaseClient";

function Profile() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    navigate("/");
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto flex max-w-7xl items-center px-6 py-12 sm:py-16 lg:min-h-[calc(100vh-149px)] lg:py-20">
        <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="relative hidden overflow-hidden bg-slate-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-lg font-bold text-slate-950">
                  B
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  BookFinds
                </span>
              </div>

              <div className="mt-24 max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Your reading list awaits
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
                  Find the stories that stay with you.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Save your discoveries, keep your favorites close, and make
                  every next read count.
                </p>
              </div>
            </div>

            <div className="relative border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-slate-300">
                “A good book is a journey you can return to whenever you need
                it.”
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                The BookFinds community
              </p>
            </div>
          </section>

          <section className="px-6 py-10 sm:px-12 sm:py-14">
            <div className="mx-auto max-w-md">
              <div className="mb-8 lg:hidden">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-amber-300">
                    B
                  </div>
                  <span className="text-xl font-semibold tracking-tight text-slate-900">
                    BookFinds
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
                  Welcome back
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                  Sign in to your account
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Pick up where you left off and keep your favorite finds
                  organized.
                </p>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Password
                    </label>
                    <a
                      href="#forgot-password"
                      className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <label className="flex items-center gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
                  />
                  Remember me on this device
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </form>
              {errorMessage && (
                <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              )}

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  New to BookFinds?
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <Link
                to="/signup"
                className="block w-full rounded-xl border border-slate-300 px-4 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Create an account
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;

"use client";

import { createClient } from "@/lib/supabase/client";
import {
  AlertCircle,
  ArrowRight,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    console.log("Logged in user:", data.user);
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <>
      {/* Playfair Display (display) + Instrument Sans (body) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Instrument+Sans:wght@300;400;500&display=swap');

        .font-display { font-family: 'Playfair Display', serif; }
        .font-body    { font-family: 'Instrument Sans', sans-serif; }

        /* Page-load staggered entrance */
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          from { background-position: -400px 0; }
          to   { background-position:  400px 0; }
        }

        .anim-slide   { animation: slideUp 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-scale   { animation: scaleIn 0.3s ease both; }
        .d-100 { animation-delay: 0.10s; }
        .d-150 { animation-delay: 0.15s; }
        .d-200 { animation-delay: 0.20s; }
        .d-250 { animation-delay: 0.25s; }
        .d-300 { animation-delay: 0.30s; }
        .d-350 { animation-delay: 0.35s; }
        .d-400 { animation-delay: 0.40s; }

        /* Animated underline on field focus */
        .field-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          width: 0;
          background: #1c1917;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .field-active .field-line { width: 100%; }

        /* Strip shadcn's default input style, use underline-only */
        .bare-input {
          border: none !important;
          border-bottom: 1.5px solid #e7e5e4 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          padding-left: 1.75rem !important;
          font-family: 'Instrument Sans', sans-serif !important;
          font-weight: 300 !important;
          font-size: 0.875rem !important;
          color: #1c1917 !important;
          outline: none !important;
          transition: border-color 0.2s !important;
        }
        .bare-input::placeholder { color: #a8a29e !important; }
        .bare-input:focus {
          border-color: #1c1917 !important;
          box-shadow: none !important;
          ring: 0 !important;
          --tw-ring-shadow: none !important;
        }

        /* Shimmer sweep on CTA hover */
        .shimmer-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%);
          background-size: 400px 100%;
          opacity: 0;
          transition: opacity 0.2s;
          animation: shimmer 1.5s infinite linear;
        }
        .shimmer-btn:hover::after { opacity: 1; }

        /* Dot-grid texture */
        .dot-grid {
          background-image: radial-gradient(circle, #d6d3d1 1px, transparent 1px);
          background-size: 18px 18px;
        }
      `}</style>

      <div className="font-body flex min-h-screen w-full bg-stone-50">
        {/* ─────────── LEFT PANEL ─────────── */}
        <aside className="relative hidden lg:flex lg:w-[42%] flex-col justify-between overflow-hidden bg-stone-900 px-12 py-10">
          {/* Dot-grid corner accent */}
          <div className="dot-grid pointer-events-none absolute bottom-0 right-0 h-60 w-60 opacity-[0.15]" />

          {/* Faint decorative letter */}
          <span
            aria-hidden="true"
            className="font-display pointer-events-none absolute -bottom-8 -right-4 select-none text-[20rem] leading-none text-white/[0.03]"
          >
            B
          </span>

          {/* Right edge hairline */}
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="grid h-9 w-9 grid-cols-2 grid-rows-2 gap-[3px] border border-white/[0.12] p-[7px]">
              <div className="rounded-[1px] bg-white/70" />
              <div className="rounded-[1px] bg-white/70" />
              <div className="rounded-[1px] bg-white/70" />
              <div className="rounded-[1px] bg-white/20" />
            </div>
            <span className="font-display text-[1.05rem] tracking-wide text-white/60">
              BrandFlow
            </span>
          </div>

          {/* Quote */}
          <div className="relative z-10 space-y-5">
            <p className="flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-white/22">
              <span className="block h-px w-5 bg-white/15" />
              Creative Studio Platform
            </p>
            <blockquote className="font-display text-[1.55rem] leading-[1.35] tracking-[-0.01em] text-white/80">
              "Design is not just what it{" "}
              <em className="italic text-white/38">looks like</em> — it's how it{" "}
              <em className="italic text-white/38">works.</em>"
            </blockquote>
            <div className="flex items-center gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.09] font-display text-[0.75rem] text-white/35">
                SJ
              </div>
              <div>
                <p className="text-[0.72rem] font-medium tracking-wide text-white/42">
                  Steve Jobs
                </p>
                <p className="mt-0.5 text-[0.6rem] tracking-[0.05em] text-white/20">
                  Co-founder, Apple Inc.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 flex gap-8 border-t border-white/[0.07] pt-5">
            {[
              { num: "12k", label: "Creators" },
              { num: "98%", label: "Uptime" },
              { num: "4.9★", label: "Rating" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-display text-[1.2rem] leading-none text-white/60">
                  {num}
                </p>
                <p className="mt-1 text-[0.56rem] uppercase tracking-[0.14em] text-white/18">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* ─────────── RIGHT PANEL ─────────── */}
        <main className="relative flex flex-1 items-center justify-center px-8 py-14">
          {/* Warm radial glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="h-[500px] w-[500px] rounded-full bg-amber-100/40 blur-3xl" />
          </div>

          <div className="relative z-10 w-full max-w-[370px]">
            {/* Mobile logo */}
            <div className="anim-slide mb-10 flex items-center gap-3 lg:hidden">
              <div className="grid h-8 w-8 grid-cols-2 grid-rows-2 gap-[3px] border border-stone-300 p-[6px]">
                <div className="rounded-[1px] bg-stone-700" />
                <div className="rounded-[1px] bg-stone-700" />
                <div className="rounded-[1px] bg-stone-700" />
                <div className="rounded-[1px] bg-stone-300" />
              </div>
              <span className="font-display text-[1rem] tracking-wide text-stone-700">
                BrandFlow
              </span>
            </div>

            {/* Heading */}
            <div className="anim-slide d-100 mb-9">
              <p className="mb-2 flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-stone-400">
                <span className="block h-px w-4 bg-stone-300" />
                Welcome back
              </p>
              <h1 className="font-display text-[2.55rem] leading-[1.08] tracking-[-0.02em] text-stone-900">
                Sign in to your <em className="italic text-stone-400">space</em>
              </h1>
            </div>

            <form onSubmit={handleLogin}>
              {/* ── Email ── */}
              <div
                className={cn(
                  "anim-slide d-200 field-active-wrapper relative mb-7",
                  focusedField === "email" && "field-active",
                )}
              >
                <Label
                  htmlFor="email"
                  className={cn(
                    "font-body mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200",
                    focusedField === "email"
                      ? "text-stone-800"
                      : "text-stone-400",
                  )}
                >
                  Email address
                </Label>
                <div className="relative">
                  <Mail
                    className={cn(
                      "absolute left-0 top-1/2 h-[15px] w-[15px] -translate-y-1/2 transition-colors duration-200",
                      focusedField === "email"
                        ? "text-stone-700"
                        : "text-stone-400",
                    )}
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bare-input h-10 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={loading}
                  />
                  {/* Animated underline */}
                  <span className="field-line" />
                </div>
              </div>

              {/* ── Password ── */}
              <div
                className={cn(
                  "anim-slide d-250 field-active-wrapper relative mb-2",
                  focusedField === "password" && "field-active",
                )}
              >
                <Label
                  htmlFor="password"
                  className={cn(
                    "font-body mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200",
                    focusedField === "password"
                      ? "text-stone-800"
                      : "text-stone-400",
                  )}
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock
                    className={cn(
                      "absolute left-0 top-1/2 h-[15px] w-[15px] -translate-y-1/2 transition-colors duration-200",
                      focusedField === "password"
                        ? "text-stone-700"
                        : "text-stone-400",
                    )}
                  />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bare-input h-10 w-full pr-8"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                  <span className="field-line" />
                </div>
              </div>

              {/* Forgot password */}
              <div className="anim-slide d-300 mb-7 flex justify-end">
                <button
                  type="button"
                  onClick={() => router.push("/forgot-password")}
                  className="font-body text-[0.7rem] text-stone-400 underline underline-offset-4 decoration-stone-200 transition-all hover:text-stone-700 hover:decoration-stone-400"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="anim-scale mb-5">
                  <Alert className="rounded-none border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="font-body text-[0.8rem] text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              {/* Submit button */}
              <div className="anim-slide d-350">
                <Button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    "shimmer-btn group relative h-12 w-full overflow-hidden rounded-none",
                    "bg-stone-900 font-body text-[0.76rem] font-medium uppercase tracking-[0.1em] text-white",
                    "transition-all duration-300 hover:bg-stone-800",
                    "disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-400",
                  )}
                >
                  {loading ? (
                    <span className="flex items-center gap-2.5">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Signing in…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2.5">
                      Continue
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  )}
                </Button>
              </div>

              {/* Divider */}
              <div className="anim-slide d-400 flex items-center gap-4 py-6">
                <span className="h-px flex-1 bg-stone-200" />
                <span className="font-body text-[0.58rem] uppercase tracking-[0.14em] text-stone-400">
                  or
                </span>
                <span className="h-px flex-1 bg-stone-200" />
              </div>


            </form>

            {/* Trust badge */}
            <div className="anim-slide d-400 mt-10 flex items-center justify-center gap-1.5 text-stone-400">
              <Sparkles className="h-3 w-3" />
              <span className="font-body text-[0.6rem] uppercase tracking-[0.12em]">
                Trusted by 12,000+ creators
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

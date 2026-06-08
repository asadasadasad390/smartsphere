"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Mail, Lock, User, ArrowRight } from "lucide-react";
import { CaptchaWidget } from "@/components/CaptchaWidget";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified || !agreed) {
      setError("Please complete the security check and agree to terms.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard/profile");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass-panel p-8 flex flex-col space-y-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="text-center space-y-2 z-10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Bot className="text-cyan-400" size={24} />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Create an account</h1>
            <p className="text-sm text-zinc-400">Start automating your workflow today with SmartSphere</p>
          </div>

          {error && (
            <div className="z-10 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4 z-10">
            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-300">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-300">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-zinc-300">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <CaptchaWidget onVerify={setCaptchaVerified} />

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-white/20 bg-black/50 text-cyan-500 focus:ring-cyan-500/50 accent-cyan-500"
              />
              <span className="text-xs text-zinc-400 leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">Privacy Policy</Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || !captchaVerified || !agreed}
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] text-white py-3 rounded-xl font-medium transition-all mt-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              {loading ? "Creating account..." : "Create account"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          <div className="text-center text-sm text-zinc-400 z-10 pt-4 border-t border-white/10">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

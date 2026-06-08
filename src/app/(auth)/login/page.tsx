"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Mail, Lock, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { CaptchaWidget } from "@/components/CaptchaWidget";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      setError("Please complete the security check first.");
      return;
    }

    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glass-panel p-8 flex flex-col space-y-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="text-center space-y-2 z-10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Bot className="text-blue-400" size={24} />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Welcome to SmartSphere</h1>
            <p className="text-sm text-zinc-400">Log in to your SmartSphere account</p>
          </div>

          {error && (
            <div className="z-10 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 z-10">
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
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300">Password</label>
                <Link href="/forgot-password" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <CaptchaWidget onVerify={setCaptchaVerified} />

            <button
              disabled={loading || !captchaVerified}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] text-white py-3 rounded-xl font-medium transition-all mt-2 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              {loading ? "Signing in..." : "Sign in"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>

          {/* Terms & Privacy */}
          <p className="text-center text-xs text-zinc-500 z-10">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Privacy Policy</Link>.
          </p>

          <div className="text-center text-sm text-zinc-400 z-10 pt-4 border-t border-white/10">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

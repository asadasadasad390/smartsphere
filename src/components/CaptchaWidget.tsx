"use client";

import { useState, useCallback, useEffect } from "react";
import { CheckCircle, RefreshCw } from "lucide-react";

function generateChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} = ?`, answer: (a + b).toString() };
}

interface CaptchaWidgetProps {
  onVerify: (verified: boolean) => void;
}

export function CaptchaWidget({ onVerify }: CaptchaWidgetProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [challenge, setChallenge] = useState({ question: "Loading...", answer: "" });
  const [input, setInput] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setChallenge(generateChallenge());
  }, []);

  const refresh = useCallback(() => {
    setChallenge(generateChallenge());
    setInput("");
    setVerified(false);
    setError(false);
    onVerify(false);
  }, [onVerify]);

  const handleCheck = () => {
    if (input.trim() === challenge.answer) {
      setVerified(true);
      setError(false);
      onVerify(true);
    } else {
      setError(true);
      setVerified(false);
      onVerify(false);
    }
  };

  if (!isMounted) {
    return (
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 space-y-3 backdrop-blur-sm min-h-[120px] animate-pulse">
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-white/10 rounded"></div>
        </div>
        <div className="h-5 w-32 bg-white/10 rounded"></div>
        <div className="flex gap-2">
          <div className="flex-1 h-9 bg-white/10 rounded-lg"></div>
          <div className="w-20 h-9 bg-white/10 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (verified) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
        <CheckCircle size={18} />
        <span>Verified — you&apos;re human!</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4 space-y-3 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Security Check
        </p>
        <button
          type="button"
          onClick={refresh}
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="Refresh captcha"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      <p className="text-white font-medium text-sm">
        Solve: <span className="text-cyan-400 font-mono text-base">{challenge.question}</span>
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          placeholder="Your answer"
          className={`flex-1 bg-black/50 border rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-all ${
            error
              ? "border-red-500/50 focus:ring-red-500/40"
              : "border-white/10 focus:ring-blue-500/40"
          }`}
        />
        <button
          type="button"
          onClick={handleCheck}
          className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
        >
          Verify
        </button>
      </div>

      {error && (
        <p className="text-red-400 text-xs">Incorrect — please try again.</p>
      )}
    </div>
  );
}

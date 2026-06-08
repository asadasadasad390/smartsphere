import Link from "next/link";
import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-500" />
            <span className="font-bold text-white tracking-tight">Smart<span className="text-cyan-500">Sphere</span></span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/security" className="text-zinc-400 hover:text-white transition-colors">Security</Link>
            <Link href="/dashboard" className="text-zinc-400 hover:text-white transition-colors">Dashboard</Link>
          </nav>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            © 2026 SmartSphere. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

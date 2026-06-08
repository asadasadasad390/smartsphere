import Link from "next/link";
import { Bot } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-blue-500" />
          <span className="font-bold text-xl tracking-tight text-white">Smart<span className="text-cyan-500">Sphere</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</Link>
          <Link href="/signup" className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors">Sign up</Link>
        </div>
      </div>
    </header>
  );
}

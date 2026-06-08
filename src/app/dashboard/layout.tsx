import Link from "next/link";
import { Bot, Home, MessageSquare, User, Settings, LogOut, Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/10 bg-black/20 backdrop-blur-md hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight text-white">Smart<span className="text-cyan-500">Sphere</span></span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-white font-medium">
            <Home size={18} className="text-blue-400" />
            Dashboard
          </Link>
          <Link href="/dashboard/chat" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-colors">
            <MessageSquare size={18} />
            AI Assistant
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-colors">
            <User size={18} />
            Profile
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-colors">
            <Settings size={18} />
            Settings
          </Link>
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 font-medium transition-colors">
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="md:hidden">
            <button className="p-2 text-zinc-400 hover:text-white">
              <Menu size={24} />
            </button>
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
              U
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

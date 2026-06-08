import Link from "next/link";
import { ArrowRight, Bot, Zap, Shield, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col font-sans w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background z-0 pointer-events-none"></div>
        
        <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-md">
            <Bot size={16} />
            <span>Next-Generation AI Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Automate your workflow with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Intelligent AI Agents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
            SmartSphere connects your tools, automates repetitive tasks, and empowers your team with an AI assistant that actually understands your business logic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-0.5">
              Start for free
              <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 active:scale-95 text-white px-8 py-4 rounded-full font-medium transition-all border border-white/10 backdrop-blur-md">
              View Demo
            </Link>
          </div>
        </div>

        {/* Abstract 3D-like elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-black/40 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need to scale</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Powerful features designed for modern teams looking to leverage AI for maximum efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-panel p-8 flex flex-col gap-4 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Instant Automations</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Connect your favorite apps and create complex workflows using natural language. No coding required.</p>
            </div>
            {/* Feature 2 */}
            <div className="glass-panel p-8 flex flex-col gap-4 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Enterprise Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Your data is encrypted at rest and in transit. Granular access controls ensure only authorized users can view sensitive information.</p>
            </div>
            {/* Feature 3 */}
            <div className="glass-panel p-8 flex flex-col gap-4 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Advanced Analytics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Track the performance of your AI agents and workflows in real-time. Make data-driven decisions to optimize processes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

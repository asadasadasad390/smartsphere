import AboutSection from "@/components/AboutSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      {/* AI Theme Effect Background */}
      <div className="ai-theme-bg"></div>
      
      <main className="flex-1 flex flex-col items-center justify-center p-8 min-h-screen">
        <div className="glass-panel max-w-3xl w-full p-12 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
          {/* Subtle glowing orb inside the glass panel */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white z-10">
            Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">AI Future</span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-xl z-10">
            I build automated, high-performance web experiences powered by intelligent systems. Let an AI optimize your digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 z-10 w-full px-4 sm:px-0">
            {/* View Portfolio Button */}
            <Link 
              href="/backup" 
              className="group relative w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-purple-200 shadow-xl">
                View Portfolio
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Talk to AI Assistant Button */}
            <Link 
              href="/assistant" 
              className="group relative w-full sm:w-auto rounded-full bg-white/5 px-8 py-3.5 text-base font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:ring-purple-500/50 block text-center"
            >
              <span className="flex items-center justify-center">
                <svg className="mr-2 h-5 w-5 text-purple-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Talk to AI Assistant
              </span>
            </Link>
          </div>
        </div>
      </main>

      <AboutSection />
    </div>
  );
}

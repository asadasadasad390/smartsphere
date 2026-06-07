export default function AboutSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-24 px-8 relative">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Bio and Skills */}
        <div className="flex-1 space-y-6 z-10">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            I am a full-stack developer specializing in AI automation and high-performance web applications. My mission is to build intelligent systems that save time, increase conversion, and provide premium user experiences.
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-white mb-4">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {['React/Next.js', 'Tailwind CSS', 'Node.js', 'OpenAI API', 'Workflow Automation', 'UI/UX Design'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-200 text-sm backdrop-blur-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AI Chatbot Mockup */}
        <div className="w-full md:w-[400px] glass-panel p-6 flex flex-col h-[400px] relative z-10">
          <div className="border-b border-white/10 pb-4 mb-4 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <h3 className="text-white font-semibold">AI Assistant</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-zinc-200 w-[85%]">
              Hi! I'm the AI assistant. Ask me anything about the developer's experience, skills, or past projects.
            </div>
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-2xl rounded-tr-none p-3 text-sm text-zinc-200 w-[85%] self-end ml-auto">
              What kind of projects do you build?
            </div>
            <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-zinc-200 w-[85%]">
              They specialize in AI-integrated platforms, automated workflows, and premium front-end web experiences!
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10 relative">
            <input 
              type="text" 
              placeholder="Ask a question..." 
              className="w-full bg-black/40 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              disabled
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import { User, Mail, Camera, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Profile</h1>
        <p className="text-zinc-400 mt-1">Manage your personal information and preferences.</p>
      </div>

      <div className="glass-panel p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 rounded-full bg-indigo-500/20 border-2 border-indigo-500/30 flex items-center justify-center overflow-hidden group">
              <span className="text-4xl font-bold text-indigo-400">U</span>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <button className="text-sm text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
              Change Picture
            </button>
          </div>

          {/* Form Section */}
          <div className="flex-1 w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="John"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-500" />
                </div>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  placeholder="john@example.com"
                  disabled
                />
              </div>
              <p className="text-xs text-zinc-500">Email cannot be changed.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Bio</label>
              <textarea 
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none h-32"
                placeholder="Tell us a little about yourself..."
              ></textarea>
            </div>

            <div className="pt-4 flex justify-end">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-indigo-500/20">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

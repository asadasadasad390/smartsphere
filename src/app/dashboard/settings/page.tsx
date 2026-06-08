import { Shield, Bell, Key, CreditCard } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
        <p className="text-zinc-400 mt-1">Configure your workspace and automation preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Settings Navigation Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20">
            <Key size={18} />
            API Keys
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-colors border border-transparent">
            <Shield size={18} />
            Security
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-colors border border-transparent">
            <Bell size={18} />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 font-medium transition-colors border border-transparent">
            <CreditCard size={18} />
            Billing
          </button>
        </div>

        {/* Settings Content Area */}
        <div className="md:col-span-3 space-y-6">
          <div className="glass-panel p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white">API Configuration</h2>
              <p className="text-sm text-zinc-400 mt-1">Connect third-party services to enable automations.</p>
            </div>

            <div className="space-y-4">
              {/* OpenAI Key */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="font-medium text-white">OpenAI API Key</span>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">Connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="password" 
                    value="sk-........................................" 
                    readOnly
                    className="flex-1 bg-black/50 border border-white/10 rounded-lg py-2 px-3 text-zinc-400 font-mono text-sm focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/10">
                    Edit
                  </button>
                </div>
              </div>

              {/* Supabase Key */}
              <div className="p-4 rounded-xl border border-white/10 bg-black/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    </div>
                    <span className="font-medium text-white">Supabase Connection</span>
                  </div>
                  <span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full border border-rose-500/20">Disconnected</span>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter Supabase Project URL" 
                    className="flex-1 bg-black/50 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 space-y-6 border-red-500/30">
            <div>
              <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
              <p className="text-sm text-zinc-400 mt-1">Irreversible actions for your account.</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl border border-red-500/20 bg-red-500/5">
              <div>
                <h3 className="font-medium text-white">Delete Account</h3>
                <p className="text-xs text-zinc-400">Permanently delete your data and automations.</p>
              </div>
              <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-medium rounded-lg transition-colors border border-red-500/30">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

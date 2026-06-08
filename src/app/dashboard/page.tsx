import { Activity, Zap, Clock, Users } from "lucide-react";
import { FileUpload } from "@/components/ui/FileUpload";
import { Bot } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SmartSphere AI Dashboard</h1>
          <p className="text-zinc-400 mt-1">Welcome back. Here's what's happening with your automations.</p>
        </div>
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
          Create Workflow
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="glass-panel p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <Zap className="text-indigo-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-400">Total Automations</p>
              <h3 className="text-2xl font-bold text-white">1,248</h3>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Activity className="text-cyan-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-400">Success Rate</p>
              <h3 className="text-2xl font-bold text-white">99.8%</h3>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Clock className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-400">Hours Saved</p>
              <h3 className="text-2xl font-bold text-white">342h</h3>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
              <Users className="text-pink-400" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-400">Active Users</p>
              <h3 className="text-2xl font-bold text-white">48</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="glass-panel overflow-hidden lg:col-span-2">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Bot size={18} className="text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Data Sync Workflow Completed</p>
                      <p className="text-xs text-zinc-500">Synced 450 records from CRM to Database</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                      Success
                    </span>
                    <span className="text-xs text-zinc-500">{i * 15} mins ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="glass-panel overflow-hidden lg:col-span-1">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Quick Upload</h2>
            <p className="text-sm text-zinc-400 mt-1">Upload data for AI processing.</p>
          </div>
          <div className="p-6">
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
}

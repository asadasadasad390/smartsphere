"use client";
import React from 'react';

export default function BackupPage() {
  const handleDownload = () => {
    const data = { projects: [] };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio_backup.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans bg-gray-900 text-white">
      {/* AI Theme Effect Background */}
      <div className="ai-theme-bg" />
      <main className="flex-1 flex flex-col items-center justify-center p-8 w-full max-w-4xl">
        <div className="glass-panel w-full p-12 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
          {/* Glowing orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white z-10">
            Portfolio Backup
          </h1>
          <p className="text-lg text-zinc-300 max-w-xl z-10">
            Access a snapshot of all portfolio projects, downloadable as a JSON archive.
          </p>
          <button onClick={handleDownload} className="relative w-48 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-100 transition-colors cursor-pointer z-10">
            Download Backup
          </button>
        </div>
      </main>
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function SecurityPage() {
  const handleSecurityCheck = () => {
    // Handle security check logic
    alert('Security check completed successfully. No new vulnerabilities found.');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-green-600/10 blur-[150px] pointer-events-none"></div>

      <nav className="p-6">
        <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 w-fit">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <main className="flex-1 flex justify-center p-6 pb-20 z-10">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Security Checkup</h1>
              <p className="text-gray-400">Review your account security and authentication settings.</p>
            </div>
            <button 
              onClick={handleSecurityCheck}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500 active:scale-95 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-[0_0_15px_rgba(22,163,74,0.3)] whitespace-nowrap"
            >
              Run Security Check
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Protection Status */}
            <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-2xl rounded-full"></div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Account is Protected</h2>
                  <p className="text-sm text-green-400">No critical security issues found</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Your account is currently using recommended security settings. Continue monitoring your activity regularly.
              </p>
            </div>

            {/* Password Strength */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Password Strength</h2>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded">Medium</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                <div className="bg-yellow-500 h-2 rounded-full w-[60%]"></div>
              </div>
              <p className="text-sm text-gray-400 mb-4">Last changed 45 days ago.</p>
              <button className="w-full sm:w-auto text-sm font-medium text-white bg-white/10 hover:bg-white/20 active:scale-95 px-4 py-2 rounded-lg transition-all border border-white/10">
                Change Password
              </button>
            </div>

            {/* Two-Factor Authentication */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Two-Factor Authentication (2FA)</h2>
                    <p className="text-sm text-gray-400 mt-1 max-w-xl">
                      Add an extra layer of security to your account by requiring more than just your password to log in.
                    </p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap">
                  Enable 2FA
                </button>
              </div>
            </div>

            {/* Device Activity */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Recent Device Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Windows PC - Chrome</p>
                      <p className="text-xs text-green-400">Current Session • New York, USA</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">iPhone 13 - Safari</p>
                      <p className="text-xs text-gray-500">Active 2 days ago • New York, USA</p>
                    </div>
                  </div>
                  <button className="text-xs text-gray-400 hover:text-white">Log out</button>
                </div>
              </div>
            </div>

            {/* Suspicious Alerts */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Security Alerts</h2>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-300">No suspicious activity</p>
                <p className="text-xs text-gray-500 mt-1">We'll alert you if anything looks wrong.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

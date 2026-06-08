'use client';

import { useState } from 'react';

interface CaptchaVerificationProps {
  onVerify: (isValid: boolean) => void;
}

export default function CaptchaVerification({ onVerify }: CaptchaVerificationProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleVerify = () => {
    // In a real app, this would involve backend validation
    // For now, we simulate a successful verification
    setIsVerified(true);
    onVerify(true);
  };

  const handleRefresh = () => {
    setIsVerified(false);
    onVerify(false);
  };

  return (
    <div className="w-full max-w-sm rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-300 font-medium">Security Check</div>
        <button 
          type="button" 
          onClick={handleRefresh}
          className="text-gray-400 hover:text-white transition-colors"
          title="Refresh Captcha"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div 
        className="flex items-center p-3 rounded-md border border-white/5 bg-white/5 cursor-pointer transition-all hover:bg-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={!isVerified ? handleVerify : undefined}
      >
        <div className="flex items-center space-x-4 w-full">
          {/* Checkbox / Spinner */}
          <div className={`w-8 h-8 rounded border flex items-center justify-center transition-all ${isVerified ? 'bg-green-500 border-green-500' : 'border-gray-500 bg-transparent'} ${isHovered && !isVerified ? 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]' : ''}`}>
            {isVerified && (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          
          <div className="flex-1 text-sm text-gray-300 font-medium select-none">
            {isVerified ? 'Verification Complete' : 'I am not a robot'}
          </div>

          <div className="flex flex-col items-center">
             <svg className="w-8 h-8 text-blue-400 opacity-80" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
             </svg>
             <span className="text-[9px] text-gray-500 mt-1">reCAPTCHA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';

export default function AssistantPage() {
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([
    { role: 'assistant', text: 'Hello! I am your AI assistant. How can I help you with your portfolio today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    // Placeholder response – in a real app you'd call an API.
    const botMsg = { role: 'assistant', text: "I'm here to help! (AI integration pending)" };
    setMessages((prev) => [...prev, botMsg]);
    setInput('');
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-gray-900 text-white">
      {/* AI Theme Effect Background */}
      <div className="ai-theme-bg" />
      <main className="flex-1 flex flex-col items-center justify-center p-8 w-full max-w-3xl">
        <div className="glass-panel w-full p-8 flex flex-col space-y-4 relative overflow-hidden">
          <h1 className="text-3xl font-bold text-center text-white z-10">AI Assistant</h1>
          <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-black/30 rounded-md z-10">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <span
                  className={`inline-block px-4 py-2 rounded-lg max-w-xs ${{
                    user: 'bg-purple-600 text-white',
                    assistant: 'bg-gray-800 text-gray-200',
                  }[msg.role]}`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 z-10">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-md bg-white text-black focus:outline-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="px-4 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-500"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

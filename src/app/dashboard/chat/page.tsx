"use client";

import { useState } from "react";
import { Send, Bot, User, Paperclip } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your AI automation assistant. How can I help you streamline your workflow today?' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput("");
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, data]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${data.error}` }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Network error occurred.' }]);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col glass-panel overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-white/10 bg-black/40 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <Bot className="text-indigo-400" size={20} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">SmartSphere Assistant</h2>
          <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Online
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-white/10 border border-white/10'}`}>
              {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-zinc-300" />}
            </div>
            <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'glass-panel text-zinc-200 rounded-tl-none'}`}>
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 bg-black/40">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto relative flex items-end gap-2">
          <button type="button" className="p-3 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-xl border border-white/10">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 relative">
            <textarea 
              className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none max-h-32 min-h-[52px]"
              placeholder="Ask me to automate a task..."
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
            />
          </div>
          <button 
            type="submit" 
            disabled={!input.trim()}
            className="p-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

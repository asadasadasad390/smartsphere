"use client";

import { useState } from "react";
import { UploadCloud, File, X, CheckCircle } from "lucide-react";

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setUploadStatus('uploading');
    
    // Simulate upload
    setTimeout(() => {
      setUploadStatus('success');
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!file ? (
        <div 
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${isDragging ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/20 hover:border-white/40 bg-black/20'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
          />
          <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
            <UploadCloud className="text-zinc-400" size={24} />
          </div>
          <h3 className="text-sm font-medium text-white mb-1">Click to upload or drag and drop</h3>
          <p className="text-xs text-zinc-500">PDF, DOCX, CSV or Images (max. 10MB)</p>
        </div>
      ) : (
        <div className="glass-panel p-4 rounded-xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <File className="text-indigo-400" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{file.name}</p>
              <p className="text-xs text-zinc-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            {uploadStatus === 'idle' && (
              <button onClick={() => setFile(null)} className="p-2 text-zinc-400 hover:text-white transition-colors">
                <X size={16} />
              </button>
            )}
            {uploadStatus === 'success' && (
              <CheckCircle className="text-emerald-400" size={20} />
            )}
          </div>
          
          {uploadStatus === 'idle' && (
            <button 
              onClick={handleUpload}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Upload File
            </button>
          )}
          
          {uploadStatus === 'uploading' && (
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-1/2 animate-[pulse_2s_ease-in-out_infinite]" />
              </div>
              <p className="text-xs text-center text-zinc-400">Uploading...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

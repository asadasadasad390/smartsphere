'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Ethan Killar',
    bio: 'Full-stack developer building AI-powered web experiences.',
    phoneNumber: '+1 (555) 123-4567',
    twitterLink: 'https://twitter.com/ethankillar',
    githubLink: 'https://github.com/ethankillar'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle save logic
    console.log('Profile saved:', profileData);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-purple-600/10 blur-[150px] pointer-events-none"></div>

      <nav className="p-6">
        <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 w-fit">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <main className="flex-1 flex justify-center p-6 pb-20 z-10">
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Profile Setup</h1>
              <p className="text-gray-400">Manage your personal information and preferences.</p>
            </div>
            <button 
              onClick={() => isEditing ? handleSave(new Event('submit') as any) : setIsEditing(true)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                isEditing 
                  ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
            >
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSave}>
              {/* Profile Picture Section */}
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-white/10">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white overflow-hidden shadow-lg">
                    {/* Placeholder image logic or Initials */}
                    {profileData.fullName.charAt(0)}
                  </div>
                  {isEditing && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Profile Picture</h3>
                  <p className="text-sm text-gray-400 mb-2">JPG, GIF or PNG. Max size of 5MB.</p>
                  {isEditing && (
                    <button type="button" className="text-sm text-purple-400 hover:text-purple-300 font-medium">
                      Upload new picture
                    </button>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="fullName">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="bio">Bio</label>
                  <textarea 
                    id="bio" 
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none disabled:opacity-70 disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="phoneNumber">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">Social Links</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 flex justify-center text-gray-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </div>
                      <input 
                        type="url" 
                        name="twitterLink"
                        value={profileData.twitterLink}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                      />
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 flex justify-center text-gray-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input 
                        type="url" 
                        name="githubLink"
                        value={profileData.githubLink}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

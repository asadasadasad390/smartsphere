import { Metadata } from 'next';

export const defaultSEO: Metadata = {
  title: 'SmartSphere – AI Automated Platform',
  description: 'SmartSphere is an AI-powered automated platform with Supabase integration for smart workflows and automation.',
  keywords: ['AI automation', 'workflow', 'SaaS', 'AI agents', 'OpenAI integration', 'Supabase'],
  authors: [{ name: 'SmartSphere Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartsphereai.com',
    title: 'SmartSphere – AI Automated Platform',
    description: 'SmartSphere is an AI-powered automated platform with Supabase integration for smart workflows and automation.',
    siteName: 'SmartSphere',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartSphere – AI Automated Platform',
    description: 'SmartSphere is an AI-powered automated platform with Supabase integration for smart workflows and automation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client conditionally
// This prevents crashing if the API key is not yet provided in .env
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) 
  : null;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
    }

    if (!openai) {
      // Mock response if OpenAI is not configured
      return NextResponse.json({
        role: 'assistant',
        content: '[Mock Mode] The OpenAI API key is missing. This is a simulated response. Please add OPENAI_API_KEY to your environment variables to enable real AI responses.'
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json(completion.choices[0].message);

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: error.message || 'An error occurred during chat processing' }, { status: 500 });
  }
}

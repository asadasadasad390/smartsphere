export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-zinc-300">
      <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the SmartSphere platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Description of Service</h2>
          <p>
            SmartSphere provides an AI-powered automation platform that connects various APIs, runs workflows, and utilizes artificial intelligence to process data. We reserve the right to modify or discontinue the service at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must not use the service for any illegal or unauthorized purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. API Usage & Limitations</h2>
          <p>
            Our service integrates with third-party APIs (e.g., OpenAI, Supabase). You agree to comply with the terms of service of these third-party providers. SmartSphere is not responsible for any rate limits, outages, or changes to third-party APIs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
          <p>
            In no event shall SmartSphere be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>
        
        <p className="text-sm text-zinc-500 pt-8">Last updated: June 2026</p>
      </div>
    </div>
  );
}

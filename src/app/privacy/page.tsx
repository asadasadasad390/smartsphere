export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl text-zinc-300">
      <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
          <p>
            At SmartSphere, we collect information to provide better services to our users. This includes basic account information (like your email and name) and data about your usage of our AI automation tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Information</h2>
          <p>
            We use the information we collect to operate, maintain, and provide the features and functionality of the Service, as well as to communicate directly with you, such as to send you email messages about product updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Data Security & AI Processing</h2>
          <p>
            Your data is processed securely. When utilizing our AI integrations (e.g., OpenAI models), data may be transmitted to our partners for processing. We do not use your private workflow data to train public AI models.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information to improve and analyze our Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at support@smartsphereai.com.
          </p>
        </section>
        
        <p className="text-sm text-zinc-500 pt-8">Last updated: June 2026</p>
      </div>
    </div>
  );
}

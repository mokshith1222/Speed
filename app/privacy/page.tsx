import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Speedometer — how we handle location data, cookies, analytics, and your privacy.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
          Privacy Policy
        </h1>
        <p className="text-xs mb-8" style={{ color: 'var(--text-tertiary)' }}>Last updated: August 2026</p>

        <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>1. Overview</h2>
          <p>
            Speedometer (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use,
            and protect information when you use our website and tools.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>2. Location Data</h2>
          <p>
            Our GPS Speedometer tool requests access to your device&apos;s location services to measure your speed. This data is:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Processed entirely locally</strong> in your web browser</li>
            <li><strong>Never transmitted</strong> to our servers or any third party</li>
            <li><strong>Never stored</strong> beyond your current browser session (unless you use localStorage for trip data)</li>
            <li><strong>Only accessed when you explicitly grant permission</strong> and tap &quot;Start&quot;</li>
          </ul>
          <p>
            You can revoke location permission at any time through your browser settings. The speedometer will not function
            without location access, but all other features of the website remain available.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>3. Cookies & Local Storage</h2>
          <p>
            We use minimal cookies and local storage:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Theme preference</strong> — stored in localStorage to remember your dark/light mode choice</li>
            <li><strong>Analytics cookies</strong> — if Google Analytics is enabled, it may set cookies to understand site usage</li>
            <li><strong>Advertising cookies</strong> — if advertisements are displayed, ad networks may set cookies</li>
          </ul>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>4. Analytics</h2>
          <p>
            We may use Google Analytics to understand how visitors use our website. Analytics collects anonymized data such as
            page views, browser type, device type, and general location (country/region level — not precise GPS coordinates).
            Google Analytics does not receive your precise location data from our speedometer tool.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>5. Advertising</h2>
          <p>
            We may display advertisements through Google AdSense or similar services. These services may use cookies to serve
            ads based on your browsing history. You can manage ad personalization through your Google account settings or by
            visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--brand-primary)' }}>Google Ads Settings</a>.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>6. Third-Party Services</h2>
          <p>
            Our website may use the following third-party services:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Analytics (usage analytics)</li>
            <li>Google AdSense (advertising, when applicable)</li>
            <li>Google Fonts (typography)</li>
            <li>Vercel (hosting)</li>
          </ul>
          <p>Each of these services has their own privacy policies governing how they handle data.</p>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>7. Data We Do Not Collect</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not collect personal identification information</li>
            <li>We do not store your GPS coordinates on any server</li>
            <li>We do not create user accounts</li>
            <li>We do not sell any data to third parties</li>
          </ul>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>8. Your Choices</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You can deny or revoke location permission at any time</li>
            <li>You can clear localStorage/cookies through your browser settings</li>
            <li>You can use browser extensions to block analytics or advertising scripts</li>
            <li>You can opt out of personalized advertising through Google&apos;s settings</li>
          </ul>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>9. Changes</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated date.
          </p>

          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>10. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please visit our <a href="/contact" className="underline" style={{ color: 'var(--brand-primary)' }}>Contact page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

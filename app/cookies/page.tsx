import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Speedometer — what cookies and local storage we use and how to manage them.',
  alternates: { canonical: '/cookies' },
};

export default function CookiePolicyPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>Cookie Policy</h1>
        <p className="text-xs mb-8" style={{ color: 'var(--text-tertiary)' }}>Last updated: August 2026</p>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device by websites you visit. They help websites remember your preferences and understand usage patterns.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Cookies We Use</h2>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
            <table className="w-full text-sm">
              <thead><tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Type</th>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Purpose</th>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Duration</th>
              </tr></thead>
              <tbody>
                <tr style={{ borderTop: '1px solid var(--border-primary)' }}>
                  <td className="px-4 py-3" style={{ color: 'var(--text-primary)' }}>Theme Preference</td>
                  <td className="px-4 py-3">Remember your dark/light mode choice</td>
                  <td className="px-4 py-3">Persistent (localStorage)</td>
                </tr>
                <tr style={{ borderTop: '1px solid var(--border-primary)' }}>
                  <td className="px-4 py-3" style={{ color: 'var(--text-primary)' }}>Analytics</td>
                  <td className="px-4 py-3">Understand site usage (if Google Analytics is enabled)</td>
                  <td className="px-4 py-3">Up to 2 years</td>
                </tr>
                <tr style={{ borderTop: '1px solid var(--border-primary)' }}>
                  <td className="px-4 py-3" style={{ color: 'var(--text-primary)' }}>Advertising</td>
                  <td className="px-4 py-3">Serve relevant ads (if advertisements are shown)</td>
                  <td className="px-4 py-3">Varies by provider</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Managing Cookies</h2>
          <p>You can manage or delete cookies through your browser settings. Most browsers allow you to block cookies, delete existing cookies, or be notified when a cookie is set. Note that disabling cookies may affect some website features.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>GPS Data</h2>
          <p>We do not use cookies to store GPS or location data. All location processing happens in your browser&apos;s memory and is discarded when you close the page.</p>
        </div>
      </div>
    </section>
  );
}

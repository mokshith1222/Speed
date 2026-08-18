import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'km/h vs mph — Understanding Speed Units Across the World',
  description: 'Learn the differences between kilometers per hour (km/h) and miles per hour (mph), historical adoption, and how to convert between them easily.',
  alternates: { canonical: '/guides/kmh-vs-mph' },
};

export default function Page() {
  return (
    <article className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <nav className="text-xs mb-6" aria-label="Breadcrumb" style={{ color: 'var(--text-tertiary)' }}>
          <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Guides</Link>
          <span className="mx-2">›</span>
          <span style={{ color: 'var(--text-secondary)' }}>km/h vs mph</span>
        </nav>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>Guide</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            km/h vs mph — Understanding Speed Units
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Why do some countries use kilometers per hour while others use miles per hour? Here is everything you need to know about the two dominant road speed units.
          </p>
        </header>
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}>
            <p className="font-semibold mb-1" style={{ color: 'var(--brand-primary)' }}>Key Takeaway</p>
            <p>1 mile equals approximately 1.60934 kilometers. Therefore, 1 mph is roughly 1.61 km/h, and 1 km/h is approximately 0.621 mph. A quick mental shortcut: multiply mph by 1.6 to get km/h, or multiply km/h by 0.6 to get mph.</p>
          </div>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Global Usage</h2>
            <p className="mb-3">Over 90% of the world&apos;s population lives in countries that use <strong>km/h</strong> for road speed limits and vehicle speedometers. The metric system is standard in continental Europe, Asia, Africa, South America, and Australasia.</p>
            <p>The primary nations utilizing <strong>mph</strong> are the United States, the United Kingdom, and various Caribbean island territories.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Common Benchmark Speeds</h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Situation</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>km/h</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>mph</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['School Zone / Residential', '30 km/h', '18.6 mph (~20 mph)'],
                    ['Urban City Limit', '50 km/h', '31.1 mph (~30 mph)'],
                    ['Rural Two-Lane Road', '80–90 km/h', '50–56 mph (~55 mph)'],
                    ['Standard Highway', '100–120 km/h', '62–75 mph (~65–75 mph)'],
                    ['German Autobahn (unrestricted)', '130+ km/h (recommended)', '80+ mph'],
                  ].map(([sit, km, mi], i) => (
                    <tr key={sit} style={{ borderTop: '1px solid var(--border-primary)', backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)' }}>
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{sit}</td>
                      <td className="px-4 py-2.5">{km}</td>
                      <td className="px-4 py-2.5">{mi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Convert Between km/h and mph</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Use our dedicated conversion calculators with complete conversion tables.</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link href="/speed-converter/kmh-to-mph" className="px-4 py-2.5 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>km/h to mph</Link>
              <Link href="/speed-converter/mph-to-kmh" className="px-4 py-2.5 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>mph to km/h</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

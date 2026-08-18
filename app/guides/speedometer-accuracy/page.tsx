import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Speedometer Accuracy — Digital, Mechanical & GPS Compared',
  description: 'Detailed analysis of vehicle speedometer accuracy laws, calibration margins, and how GPS compares with mechanical and OBD-II sensors.',
  alternates: { canonical: '/guides/speedometer-accuracy' },
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
          <span style={{ color: 'var(--text-secondary)' }}>Speedometer Accuracy</span>
        </nav>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>Guide</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Speedometer Accuracy: Digital, Mechanical &amp; GPS Compared
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            How accurate are modern vehicle speedometers? Why are they calibrated with positive margins, and how does GPS compare?
          </p>
        </header>
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Legal Requirements</h2>
            <p className="mb-3">Vehicle safety regulations across the European Union, United States, and Asia mandate that a factory speedometer may never under-report a vehicle&apos;s true speed. To prevent accidental speeding violations by motorists, automakers build in a buffer of 2% to 5% higher readout.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Accuracy Comparison</h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Instrument Type</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Accuracy</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Limitation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Factory Mechanical', '±4–8 km/h', 'Subject to tire pressure & wear'],
                    ['Digital Dashboard (OBD)', '±2–4 km/h', 'Artificially offset by manufacturer firmware'],
                    ['GPS Speedometer (Doppler)', '±0.5–1 km/h', 'Requires clear sky visibility'],
                  ].map(([inst, acc, lim], i) => (
                    <tr key={inst} style={{ borderTop: '1px solid var(--border-primary)', backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)' }}>
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{inst}</td>
                      <td className="px-4 py-2.5">{acc}</td>
                      <td className="px-4 py-2.5">{lim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Test Your Speed Live</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Check your true satellite ground speed using our browser tool.</p>
            <Link href="/speedometer" className="inline-flex items-center px-4 py-2.5 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>Launch GPS Speedometer →</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Speed Units Explained — km/h, mph, m/s, knots, Mach',
  description: 'Comprehensive guide explaining all major speed units, their formulas, historical context, and conversion factors.',
  alternates: { canonical: '/guides/speed-units-explained' },
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
          <span style={{ color: 'var(--text-secondary)' }}>Speed Units Explained</span>
        </nav>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>Guide</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Speed Units Explained: km/h, mph, m/s &amp; Knots
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Velocity is measured differently depending on the domain: road transport, maritime, aviation, and scientific research each use their own standard unit.
          </p>
        </header>
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Overview of Primary Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--brand-primary)' }}>km/h (Kilometers per Hour)</h3>
                <p>The standard metric road unit utilized across over 180 countries. 1 km/h = 0.27778 m/s.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--brand-primary)' }}>mph (Miles per Hour)</h3>
                <p>Imperial speed measurement standard in the USA, UK, and select territories. 1 mph = 1.60934 km/h.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--brand-primary)' }}>knots (kt)</h3>
                <p>One nautical mile per hour (1.852 km/h). Standard in commercial aviation and maritime shipping.</p>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--brand-primary)' }}>m/s (Meters per Second)</h3>
                <p>The SI base unit of velocity utilized worldwide in scientific research, aerodynamics, and physics. 1 m/s = 3.6 km/h.</p>
              </div>
            </div>
          </section>
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Test Our Speed Converter</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Convert easily between all of these units with instant real-time results.</p>
            <Link href="/speed-converter" className="inline-flex items-center px-4 py-2.5 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>All Speed Converters →</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

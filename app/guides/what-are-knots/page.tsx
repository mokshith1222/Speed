import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Are Knots? Nautical Speed Unit Explained',
  description: 'Learn what a knot is, why maritime and aviation industries measure speed in knots, and how to convert knots to km/h and mph.',
  alternates: { canonical: '/guides/what-are-knots' },
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
          <span style={{ color: 'var(--text-secondary)' }}>What Are Knots</span>
        </nav>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>Guide</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            What Are Knots? Speed Unit Explained
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Why do ships and aircraft measure speed in knots instead of km/h or mph? Discover the history, mathematics, and modern relevance of nautical speed.
          </p>
        </header>
        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}>
            <p className="font-semibold mb-1" style={{ color: 'var(--brand-primary)' }}>Definition</p>
            <p>One knot equals <strong>one nautical mile per hour</strong>, which is exactly <strong>1.852 kilometers per hour</strong> or approximately <strong>1.15078 miles per hour</strong>.</p>
          </div>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>The Origin: The Chip Log</h2>
            <p className="mb-3">In the 16th century, sailors measured a vessel&apos;s speed using a device called a <em>chip log</em>. A wooden board attached to a knotted rope was thrown overboard. As the ship sailed forward, the rope pulled off a reel.</p>
            <p>A sailor used a 28-second sandglass to count how many knots passed through their hands before the sand ran out. The number of knots counted gave the vessel&apos;s speed in &quot;knots.&quot;</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Why Knots Are Still Used Today</h2>
            <p className="mb-3">A nautical mile corresponds directly to one minute of latitude on Earth&apos;s surface (1/60th of a degree). Because navigation charts use degrees and minutes of latitude and longitude, traveling at 1 knot means traveling 1 minute of latitude in 1 hour.</p>
            <p>This geographic alignment makes navigation calculations substantially simpler for marine captains and aircraft pilots worldwide.</p>
          </section>
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Convert Knots to km/h</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Check our specialized nautical converter tool.</p>
            <Link href="/speed-converter/knots-to-kmh" className="inline-flex items-center px-4 py-2.5 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>Knots to km/h Converter →</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

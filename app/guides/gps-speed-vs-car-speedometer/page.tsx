import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GPS Speed vs Car Speedometer — Which Is More Accurate?',
  description: 'Understand why GPS speed and your car speedometer show different values. Learn which is more accurate and why manufacturers calibrate speedometers to read high.',
  alternates: { canonical: '/guides/gps-speed-vs-car-speedometer' },
};

export default function GpsVsCarPage() {
  return (
    <article className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <nav className="text-xs mb-6" aria-label="Breadcrumb" style={{ color: 'var(--text-tertiary)' }}>
          <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Guides</Link>
          <span className="mx-2">›</span>
          <span style={{ color: 'var(--text-secondary)' }}>GPS vs Car Speedometer</span>
        </nav>
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>Guide</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>GPS Speed vs Car Speedometer — Which Is More Accurate?</h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Your car speedometer almost certainly reads higher than your actual speed. Here&apos;s why GPS is usually more accurate, and when it isn&apos;t.</p>
        </header>
        <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}>
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>Quick Answer</p>
            <p className="text-sm leading-relaxed">GPS speed is generally more accurate than your car&apos;s speedometer. Car speedometers are legally required to never read lower than actual speed, so manufacturers calibrate them to read 2–5% higher. GPS measures actual ground movement via satellites.</p>
          </div>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>How Car Speedometers Work</h2>
            <p className="text-sm leading-relaxed mb-3">Car speedometers measure the rotational speed of the transmission output shaft or a wheel sensor. This rotation is converted to road speed based on the known tire circumference. The fundamental formula is: <strong>Speed = Wheel RPM × Tire Circumference × 60</strong>.</p>
            <p className="text-sm leading-relaxed">This method has an inherent weakness: if the tire size changes (due to wear, pressure, or replacement with non-standard tires), the speedometer becomes inaccurate because it still assumes the original tire size.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Why Car Speedometers Read High</h2>
            <p className="text-sm leading-relaxed mb-3">In most jurisdictions, regulations require that a speedometer must never indicate a speed lower than the actual vehicle speed. The common standard (UN ECE Regulation 39) states:</p>
            <div className="rounded-lg p-4 text-sm font-mono" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}>0 ≤ (Indicated Speed - Actual Speed) ≤ 0.1 × Actual Speed + 4 km/h</div>
            <p className="text-sm leading-relaxed mt-3">This means at 100 km/h actual speed, the speedometer is allowed to read up to 114 km/h. In practice, most manufacturers calibrate to about 2–5% over, with new tires. As tires wear, the error increases slightly.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>How GPS Speed Differs</h2>
            <p className="text-sm leading-relaxed mb-3">GPS measures true ground speed by tracking position changes via satellite. It is not affected by tire size, wear, or pressure. In good conditions (clear sky, 4+ satellites), GPS speed is accurate within ±1–2 km/h.</p>
            <p className="text-sm leading-relaxed">However, GPS has its own limitations: signal latency can cause readings to lag in rapidly changing speed conditions (hard braking, sharp acceleration), and accuracy degrades in tunnels, parking garages, and urban canyons.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Comparison Table</h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead><tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Aspect</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Car Speedometer</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>GPS Speed</th>
                </tr></thead>
                <tbody>
                  {[
                    ['Measurement method', 'Wheel rotation', 'Satellite positioning'],
                    ['Typical accuracy', '±2–5% (reads high)', '±1–2 km/h'],
                    ['Affected by tire wear', 'Yes', 'No'],
                    ['Works in tunnels', 'Yes', 'No'],
                    ['Response time', 'Instant', 'Slight lag'],
                    ['Legally certified', 'Yes', 'No'],
                    ['Cost', 'Built into vehicle', 'Free (with phone)'],
                  ].map(([aspect, car, gps], i) => (
                    <tr key={aspect} style={{ borderTop: '1px solid var(--border-primary)', backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)' }}>
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{aspect}</td>
                      <td className="px-4 py-2.5">{car}</td>
                      <td className="px-4 py-2.5">{gps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Which Should You Trust?</h2>
            <p className="text-sm leading-relaxed mb-3">For <strong>knowing your actual speed</strong>: GPS is usually more accurate. For <strong>legal compliance</strong>: your car speedometer is the recognized instrument. If your GPS reads 97 km/h in a 100 km/h zone, you&apos;re almost certainly under the limit, because your car speedometer would likely show 100–104 km/h.</p>
            <p className="text-sm leading-relaxed">The best approach is to use GPS speed as a reference to understand how your speedometer is calibrated, then use that knowledge to better interpret your speedometer during normal driving.</p>
          </section>
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Compare for Yourself</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Open our GPS speedometer alongside your car&apos;s dashboard to see the difference.</p>
            <Link href="/speedometer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>Open GPS Speedometer →</Link>
          </div>
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-primary)' }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Related Guides</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/guides/how-gps-speed-works" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>How GPS Speed Works</Link>
              <Link href="/guides/how-accurate-is-gps-speed" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>GPS Speed Accuracy</Link>
              <Link href="/guides/speedometer-accuracy" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>Speedometer Accuracy</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

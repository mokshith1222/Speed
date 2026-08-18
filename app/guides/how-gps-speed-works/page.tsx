import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How GPS Speed Measurement Works — Complete Guide',
  description: 'Learn how GPS speedometers calculate your speed using satellite signals. Understand the technology, accuracy factors, and limitations of GPS-based speed measurement.',
  alternates: { canonical: '/guides/how-gps-speed-works' },
};

export default function HowGpsSpeedWorksPage() {
  return (
    <article className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        {/* Breadcrumb */}
        <nav className="text-xs mb-6" aria-label="Breadcrumb" style={{ color: 'var(--text-tertiary)' }}>
          <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Home</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Guides</Link>
          <span className="mx-2">›</span>
          <span style={{ color: 'var(--text-secondary)' }}>How GPS Speed Works</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>Guide</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            How GPS Speed Measurement Works
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            GPS speedometers don&apos;t measure wheel rotation like car speedometers. Instead, they use satellite signals
            to calculate how fast you&apos;re moving across the Earth&apos;s surface. Here&apos;s how it works.
          </p>
        </header>

        <div className="prose-custom space-y-8" style={{ color: 'var(--text-secondary)' }}>
          {/* Direct Answer */}
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}>
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>Quick Answer</p>
            <p className="text-sm leading-relaxed">
              GPS speed works by receiving signals from multiple satellites orbiting Earth. Your device determines its
              position several times per second, then calculates speed by measuring how far you&apos;ve moved between
              position readings divided by the time elapsed. This gives you true ground speed.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>The GPS System</h2>
            <p className="text-sm leading-relaxed mb-3">
              The Global Positioning System consists of approximately 31 satellites orbiting Earth at about 20,200 km altitude.
              At any given moment, at least 4 satellites are visible from any point on Earth&apos;s surface. Each satellite
              continuously broadcasts its position and the precise time from an onboard atomic clock.
            </p>
            <p className="text-sm leading-relaxed">
              Your device receives these signals and uses the time difference between when a signal was sent and when it
              was received to calculate the distance to each satellite. With distances to at least 4 satellites, the device
              can triangulate its exact position — a process called <strong>trilateration</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>How Speed Is Calculated</h2>
            <p className="text-sm leading-relaxed mb-3">
              GPS speed can be determined in two ways:
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm leading-relaxed">
              <li>
                <strong>Doppler shift method</strong> — The GPS chipset analyzes the frequency shift of incoming satellite
                signals. Just like a siren sounds higher-pitched as it approaches and lower as it moves away (the Doppler effect),
                GPS signals shift in frequency based on relative motion. This is the most accurate method and is typically
                what the GPS chipset uses to report speed.
              </li>
              <li>
                <strong>Position delta method</strong> — The device calculates two consecutive positions and divides the distance
                between them by the time elapsed. This is a fallback method and is slightly less accurate because small position
                errors get amplified in the speed calculation.
              </li>
            </ol>
            <p className="text-sm leading-relaxed mt-3">
              Most modern GPS chipsets use the Doppler method for speed and are surprisingly accurate — often within ±0.1 m/s
              (about ±0.4 km/h) in ideal conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>GPS Speed in Web Browsers</h2>
            <p className="text-sm leading-relaxed mb-3">
              Web-based GPS speedometers (like ours) use the browser&apos;s <strong>Geolocation API</strong>. When you grant
              location permission, the browser asks the operating system for GPS data, which in turn communicates with the
              GPS hardware.
            </p>
            <p className="text-sm leading-relaxed mb-3">
              The Geolocation API provides a <code className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--brand-primary)' }}>speed</code> property
              (in meters per second) along with position coordinates and an accuracy estimate. Our speedometer reads this
              value and converts it to your chosen unit (km/h, mph, knots, or m/s).
            </p>
            <p className="text-sm leading-relaxed">
              When the GPS chipset doesn&apos;t provide a speed value directly (which can happen, especially on iOS), we fall
              back to calculating speed from consecutive position readings using the Haversine formula for distance on a sphere.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Factors Affecting Accuracy</h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Factor</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Clear sky', 'Best accuracy (±0.5 km/h)'],
                    ['Urban canyon (tall buildings)', 'Signal reflection causes errors'],
                    ['Dense forest canopy', 'Blocked or weakened signals'],
                    ['Tunnels / underground', 'No GPS signal at all'],
                    ['Indoors', 'Very poor or no accuracy'],
                    ['Cloud cover', 'Minimal effect on accuracy'],
                    ['Device quality', 'Newer phones have better GPS chips'],
                    ['Cold start', 'First 10-60 seconds may be inaccurate'],
                  ].map(([factor, effect], i) => (
                    <tr key={factor} style={{ borderTop: '1px solid var(--border-primary)', backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)' }}>
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{factor}</td>
                      <td className="px-4 py-2.5">{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>GPS Speed vs Speedometer Speed</h2>
            <p className="text-sm leading-relaxed mb-3">
              Vehicle speedometers measure wheel rotation speed, which is then converted to road speed based on tire circumference.
              GPS measures actual ground movement. These can differ for several reasons:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li><strong>Legal requirement</strong> — In most countries, car speedometers are legally required to never read lower than actual speed. Manufacturers typically calibrate them to read 2-5% higher.</li>
              <li><strong>Tire wear</strong> — As tires wear down, their circumference decreases, causing the speedometer to read slightly higher than actual speed.</li>
              <li><strong>Tire pressure</strong> — Under-inflated tires have a smaller effective radius, also causing higher speedometer readings.</li>
              <li><strong>Non-standard tires</strong> — Fitting tires different from the factory specification will change the speedometer calibration.</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              For a detailed comparison, read our guide on{' '}
              <Link href="/guides/gps-speed-vs-car-speedometer" className="underline" style={{ color: 'var(--brand-primary)' }}>
                GPS speed vs car speedometer accuracy
              </Link>.
            </p>
          </section>

          {/* CTA */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Try It Yourself</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              See GPS speed measurement in action with our free online speedometer.
            </p>
            <Link href="/speedometer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>
              Open GPS Speedometer →
            </Link>
          </div>

          {/* Related links */}
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-primary)' }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Related Guides</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/guides/how-accurate-is-gps-speed" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                GPS Speed Accuracy
              </Link>
              <Link href="/guides/gps-speed-vs-car-speedometer" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                GPS vs Car Speedometer
              </Link>
              <Link href="/guides/phone-as-speedometer" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                Phone as Speedometer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import SpeedConverterWidget from '@/components/SpeedConverterWidget';
import { CONVERSION_PAIRS } from '@/lib/conversion-engine';

export const metadata: Metadata = {
  title: 'Speed Converter — Convert km/h, mph, knots, m/s',
  description:
    'Free online speed converter. Instantly convert between kilometers per hour (km/h), miles per hour (mph), knots, and meters per second (m/s). Accurate, fast, and easy to use.',
  alternates: {
    canonical: '/speed-converter',
  },
};

export default function SpeedConverterPage() {
  return (
    <>
      <section className="py-8 md:py-12" aria-labelledby="converter-heading">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--brand-primary)' }}>
              Free Tool
            </p>
            <h1
              id="converter-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Speed Converter
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Convert between kilometers per hour (km/h), miles per hour (mph), knots, and meters per second (m/s) instantly.
              Select your units, enter a velocity, and view exact mathematical results.
            </p>
          </div>

          <SpeedConverterWidget />
        </div>
      </section>

      {/* Individual Converter Links */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="converters-heading">
        <div className="container-main max-w-3xl">
          <h2 id="converters-heading" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Popular Speed Conversions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONVERSION_PAIRS.map((pair) => (
              <Link
                key={pair.slug}
                href={`/speed-converter/${pair.slug}`}
                className="rounded-xl p-5 no-underline transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                <div className="text-lg font-bold mb-1" style={{ color: 'var(--brand-primary)' }}>
                  {pair.title}
                </div>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  Conversion table, step-by-step formula, and calculator
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Educational & Mathematical Section */}
      <section className="py-12 md:py-16" aria-labelledby="about-converter">
        <div className="container-main max-w-3xl">
          <h2 id="about-converter" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            The Mathematics of Speed Conversion
          </h2>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Speed is defined as the magnitude of velocity, representing distance traveled per unit of time (<code>v = &Delta;d / &Delta;t</code>).
              Because historical standards evolved independently across civil transport, naval navigation, and experimental physics,
              different systems developed unique unit definitions. Converting between these units requires applying exact mathematical ratios.
            </p>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Exact Conversion Factors (to SI Base Unit m/s)
              </h3>
              <p className="mb-3">
                All conversions on this platform use meters per second (m/s) as the precision intermediate base unit to prevent cumulative rounding drift:
              </p>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                      <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Unit</th>
                      <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Factor to m/s</th>
                      <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Factor to km/h</th>
                      <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Factor to mph</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1 km/h', '1 / 3.6 (0.277778 m/s)', '1.000000 km/h', '0.621371 mph'],
                      ['1 mph', '0.447040 m/s', '1.609344 km/h', '1.000000 mph'],
                      ['1 knot', '1.852 / 3.6 (0.514444... m/s)', '1.852000 km/h', '1.150779 mph'],
                      ['1 m/s', '1.000000 m/s', '3.600000 km/h', '2.236936 mph'],
                    ].map(([unit, ms, kmh, mph], i) => (
                      <tr
                        key={unit}
                        style={{
                          borderTop: '1px solid var(--border-primary)',
                          backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                        }}
                      >
                        <td className="px-4 py-2 font-medium" style={{ color: 'var(--text-primary)' }}>{unit}</td>
                        <td className="px-4 py-2 font-mono">{ms}</td>
                        <td className="px-4 py-2 font-mono">{kmh}</td>
                        <td className="px-4 py-2 font-mono">{mph}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Why Precision Matters: The Knots Benchmark
              </h3>
              <p>
                In maritime navigation and aviation, truncating conversion factors leads to cumulative navigational errors over long journeys.
                By international convention, 1 international nautical mile equals exactly 1,852 meters. Therefore, 1 knot equals exactly 1.852 km/h.
                For example, converting 500 knots to km/h yields exactly <code>500 &times; 1.852 = 926.0 km/h</code>.
                Our conversion engine uses exact fraction representations to maintain zero-drift floating point accuracy across calculations and tables.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Need Live Speed Tracking?
              </h3>
              <p>
                If you are on the road, cycling, or on a boat and want to measure your actual velocity right now, try our{' '}
                <Link href="/speedometer" className="font-medium underline" style={{ color: 'var(--brand-primary)' }}>
                  GPS Speedometer
                </Link>
                . It computes your true ground velocity directly in your browser using satellite GNSS Doppler signals, with zero coordinate transmission to servers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

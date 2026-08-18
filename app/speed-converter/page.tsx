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
              Convert between km/h, mph, knots, and m/s instantly. Select your units and enter a value.
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
                  Conversion table, formula, and calculator
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="py-12 md:py-16" aria-labelledby="about-converter">
        <div className="container-main max-w-3xl">
          <h2 id="about-converter" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            How Speed Conversion Works
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              Speed units measure how fast an object moves over a given time period. Different countries and industries use different
              units: km/h is standard in most of the world, mph in the US and UK, knots in aviation and maritime, and m/s in science.
            </p>
            <p>
              Conversions use fixed mathematical ratios. For example, 1 km/h = 0.621371 mph, and 1 knot = 1.852 km/h.
              All conversions on this page use these precise factors to ensure accuracy.
            </p>
            <p>
              Need to measure your actual speed? Try our{' '}
              <Link href="/speedometer" className="font-medium underline" style={{ color: 'var(--brand-primary)' }}>
                GPS Speedometer
              </Link>{' '}
              — it works right in your browser using your device&apos;s GPS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

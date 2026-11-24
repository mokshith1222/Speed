import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Speed Units Explained: km/h, mph, m/s, Knots',
  description:
    'Comprehensive guide explaining all major speed units (km/h, mph, m/s, knots, Mach), their physical formulas, historical origins, and conversion factors.',
  alternates: { canonical: '/guides/speed-units-explained' },
  openGraph: {
    title: 'Speed Units Explained: km/h, mph, m/s, Knots',
    description:
      'Comprehensive guide explaining all major speed units (km/h, mph, m/s, knots, Mach), their physical formulas, historical origins, and conversion factors.',
    url: '/guides/speed-units-explained',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Units Explained: km/h, mph, m/s, Knots',
    description:
      'Comprehensive guide explaining all major speed units (km/h, mph, m/s, knots, Mach), their physical formulas, historical origins, and conversion factors.',
  },
};

export default function SpeedUnitsExplainedPage() {
  const baseUrl = getBaseUrl();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Speed Units Explained: km/h, mph, m/s, Knots & Mach',
    description:
      'Comprehensive guide explaining all major speed units (km/h, mph, m/s, knots, Mach), their physical formulas, historical origins, and conversion factors.',
    url: `${baseUrl}/guides/speed-units-explained`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/speed-units-explained`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Speedometer',
      url: baseUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `${baseUrl}/guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Speed Units Explained',
        item: `${baseUrl}/guides/speed-units-explained`,
      },
    ],
  };

  return (
    <article className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container-main max-w-3xl">
        <nav className="text-xs mb-6" aria-label="Breadcrumb" style={{ color: 'var(--text-tertiary)' }}>
          <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>
            Home
          </Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>
            Guides
          </Link>
          <span className="mx-2">›</span>
          <span style={{ color: 'var(--text-secondary)' }}>Speed Units Explained</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Speed Units Explained: km/h, mph, m/s, Knots &amp; Mach
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Speed is the rate at which an object covers distance over time. While the fundamental physical quantity remains identical,
            different industries and global regions rely on different measurement systems. Here is an authoritative guide to every major speed unit.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Quick Overview */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Physical Dimension of Speed
            </p>
            <p>
              In physics, speed is a scalar quantity with the dimensional formula <strong>[L][T]<sup>&minus;1</sup></strong> (Length divided by Time).
              The official International System of Units (SI) base unit for speed is <strong>meters per second (m/s)</strong>.
              All other speed units (km/h, mph, knots) are converted using fixed linear ratios relative to m/s.
            </p>
          </div>

          {/* Section 1: Detailed Breakdown of Units */}
          <section>
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              In-Depth Breakdown of Primary Speed Units
            </h2>

            <div className="space-y-4">
              <div
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--brand-primary)' }}>
                    Kilometers per Hour (km/h)
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    1 km/h = 1/3.6 m/s
                  </span>
                </div>
                <p className="mb-2">
                  <strong>Domain:</strong> Global automotive travel, road speed limits, cycling, and consumer weather reports across more than 180 countries.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Adopted universally throughout Continental Europe, Asia, Africa, Australasia, and the Americas (with the exception of the US and UK).
                  Because the kilometer is defined as 1,000 meters and an hour has 3,600 seconds, converting between m/s and km/h simply requires dividing or multiplying by 3.6.
                </p>
              </div>

              <div
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--brand-primary)' }}>
                    Miles per Hour (mph)
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    1 mph = 0.44704 m/s
                  </span>
                </div>
                <p className="mb-2">
                  <strong>Domain:</strong> Road traffic speed limits and vehicle instrumentation in the United States, the United Kingdom, and select overseas territories.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Defined using the international statute mile of exactly 5,280 feet or 1,609.344 meters (standardized in 1959).
                  One mile per hour equals exactly 1.609344 km/h. Motorists in mph-standard countries frequently convert to km/h when traveling abroad.
                </p>
              </div>

              <div
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--brand-primary)' }}>
                    Knots (kn / kt)
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    1 knot = 1.852/3.6 m/s
                  </span>
                </div>
                <p className="mb-2">
                  <strong>Domain:</strong> Commercial maritime shipping, naval operations, air traffic control, and civil aviation navigation.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  One knot equals one nautical mile per hour (exactly 1.852 km/h). Because one nautical mile corresponds to one minute of latitude
                  along Earth&apos;s meridians, traveling at 1 knot corresponds directly to traveling 1 minute of latitude in 1 hour, making course plotting
                  on navigational charts straightforward.
                </p>
              </div>

              <div
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--brand-primary)' }}>
                    Meters per Second (m/s)
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    SI Base Unit
                  </span>
                </div>
                <p className="mb-2">
                  <strong>Domain:</strong> Physics, aerodynamics, fluid dynamics, ballistics, meteorology wind velocities, and athletic track sprint pacing.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  As the SI base unit, m/s integrates without conversion factors into standard physical formulas such as kinetic energy
                  (<code>E = &frac12;mv&sup2;</code>) and momentum (<code>p = mv</code>). A wind speed of 10 m/s equals a brisk 36 km/h (22.4 mph).
                </p>
              </div>

              <div
                className="p-5 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-base" style={{ color: 'var(--brand-primary)' }}>
                    Mach Number (M)
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    Dimensionless Ratio
                  </span>
                </div>
                <p className="mb-2">
                  <strong>Domain:</strong> High-speed aviation, supersonic flight, ballistics, and aerospace rocketry.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Unlike fixed-distance units, Mach number is a dimensionless ratio comparing vehicle speed to the local speed of sound
                  (<code>M = v / a</code>). Because the speed of sound in air depends on temperature (approximately 343 m/s or 1,235 km/h at 20&deg;C,
                  falling to ~295 m/s at high altitude in &minus;50&deg;C air), a vehicle flying at Mach 1 travels at different ground speeds depending
                  on ambient atmospheric conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Benchmark Comparison Table */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Speed Comparison Across Everyday Benchmarks
            </h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Scenario</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>km/h</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>mph</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>knots</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>m/s</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Brisk Walking', '5.0 km/h', '3.1 mph', '2.7 kn', '1.39 m/s'],
                    ['City Cycling', '20.0 km/h', '12.4 mph', '10.8 kn', '5.56 m/s'],
                    ['Urban Speed Limit', '50.0 km/h', '31.1 mph', '27.0 kn', '13.89 m/s'],
                    ['Highway Cruise', '100.0 km/h', '62.1 mph', '54.0 kn', '27.78 m/s'],
                    ['High-Speed Rail (TGV/Shinkansen)', '300.0 km/h', '186.4 mph', '162.0 kn', '83.33 m/s'],
                    ['Commercial Airliner (Cruise)', '900.0 km/h', '559.2 mph', '486.0 kn', '250.00 m/s'],
                    ['Speed of Sound (Air at 20°C)', '1,234.8 km/h', '767.3 mph', '666.7 kn', '343.00 m/s'],
                  ].map(([scen, kmh, mph, kn, ms], i) => (
                    <tr
                      key={scen}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{scen}</td>
                      <td className="px-4 py-2.5">{kmh}</td>
                      <td className="px-4 py-2.5">{mph}</td>
                      <td className="px-4 py-2.5">{kn}</td>
                      <td className="px-4 py-2.5">{ms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Convert Between Any of These Units
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Use our interactive multi-unit speed converter with verified mathematical factors.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                href="/speed-converter"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm no-underline"
                style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
              >
                Browse Speed Converters →
              </Link>
              <Link
                href="/speedometer"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
              >
                Live GPS Speedometer
              </Link>
            </div>
          </div>

          {/* Related Guides */}
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-primary)' }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Related Guides
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/guides/kmh-vs-mph"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                km/h vs mph
              </Link>
              <Link
                href="/guides/what-are-knots"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                What Are Knots?
              </Link>
              <Link
                href="/guides/how-gps-speed-works"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                How GPS Speed Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

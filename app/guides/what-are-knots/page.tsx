import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'What Are Knots? Nautical Speed Explained',
  description:
    'Learn what a knot is, why maritime navigation and aviation measure velocity in knots, and how to convert knots to km/h and mph.',
  alternates: { canonical: '/guides/what-are-knots' },
  openGraph: {
    title: 'What Are Knots? Nautical Speed Explained',
    description:
      'Learn what a knot is, why maritime navigation and aviation measure velocity in knots, and how to convert knots to km/h and mph.',
    url: '/guides/what-are-knots',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Are Knots? Nautical Speed Explained',
    description:
      'Learn what a knot is, why maritime navigation and aviation measure velocity in knots, and how to convert knots to km/h and mph.',
  },
};

export default function WhatAreKnotsPage() {
  const baseUrl = getBaseUrl();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'What Are Knots? The History, Mathematics & Navigation of Nautical Speed',
    description:
      'Learn what a knot is, why maritime navigation and aviation measure velocity in knots, and how to convert knots to km/h and mph.',
    url: `${baseUrl}/guides/what-are-knots`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/what-are-knots`,
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
        name: 'What Are Knots',
        item: `${baseUrl}/guides/what-are-knots`,
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
          <span style={{ color: 'var(--text-secondary)' }}>What Are Knots</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            What Are Knots? The History, Mathematics &amp; Navigation of Nautical Speed
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Why do container ships, naval vessels, and commercial airliners measure their velocity in knots rather than
            kilometers per hour or miles per hour? Here is the geographic science and maritime history behind the unit.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Definition Box */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Exact Definition
            </p>
            <p>
              One knot (abbreviated <strong>kn</strong> or <strong>kt</strong>) equals <strong>one international nautical mile per hour</strong>.
              By international agreement (adopted in 1929), one nautical mile is defined as exactly <strong>1,852 meters</strong>.
              Therefore, <strong>1 knot = exactly 1.852 km/h</strong> or approximately <strong>1.150779 mph</strong>.
            </p>
          </div>

          {/* Section 1: Geographic Origin */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              The Earth Connection: Why 1 Nautical Mile Equals 1 Minute of Latitude
            </h2>
            <p className="mb-3">
              Unlike a statute mile (5,280 feet) or a kilometer (originally defined as one ten-millionth of the distance from the equator to the North Pole),
              the nautical mile is rooted directly in spherical navigation geometry:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Earth&apos;s circumference is divided into <strong>360 degrees</strong> of latitude.</li>
              <li>Each degree of latitude is subdivided into <strong>60 minutes of arc</strong> (360 &times; 60 = 21,600 minutes around the meridian).</li>
              <li>One nautical mile corresponds almost precisely to <strong>one minute of latitude</strong> along any meridian of Earth.</li>
            </ul>
            <p>
              This geographic alignment provides an immense practical advantage on nautical and aeronautical navigation charts.
              If a navigator sails due North or South at <strong>20 knots for one hour</strong>, they know with certainty that they have traveled
              exactly <strong>20 minutes of latitude</strong> on their navigation chart. Distance and position coordinates can be measured
              directly off the chart&apos;s latitude scale using a pair of dividers, without performing awkward unit conversions.
            </p>
          </section>

          {/* Section 2: The Chip Log */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Historical Origins: The 16th-Century Chip Log
            </h2>
            <p className="mb-3">
              The term &quot;knot&quot; originates from a physical measurement method invented by mariners in the 16th century called the <strong>chip log</strong>.
              Before electronic satellite navigation or mechanical impellers, sailors determined their speed through water using:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-3">
              <li>
                <strong>A wooden board (the chip):</strong> Shaped like a quadrant and weighted with lead along one curved edge so it floated upright
                in the water, creating hydrodynamic drag to remain stationary where it fell.
              </li>
              <li>
                <strong>A log line:</strong> A long rope tied to the board, marked at precise intervals with physical knots tied into the cordage.
              </li>
              <li>
                <strong>A sandglass timer:</strong> A small sandglass, typically calibrated to 28 or 30 seconds.
              </li>
            </ol>
            <p>
              When the chip was thrown overboard, the vessel sailed away, pulling the rope off a free-spinning wooden reel.
              A sailor allowed the line to run freely through their hands, counting the number of knots that passed until the sandglass ran out.
              Because the spacing between knots was carefully proportioned to the sandglass duration (knots spaced at 47 feet 3 inches for a 28-second timer),
              the count of knots equaled the ship&apos;s speed in nautical miles per hour.
            </p>
          </section>

          {/* Section 3: Aviation & Modern Maritime */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Why Modern Aviation and Navies Still Use Knots
            </h2>
            <p className="mb-3">
              Despite the worldwide adoption of the metric system in consumer transport, international aviation (governed by ICAO)
              and commercial shipping continue to use knots for several operational reasons:
            </p>
            <div className="space-y-3">
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  Chart Alignment
                </h3>
                <p className="text-xs leading-relaxed">
                  Both maritime navigational charts and aeronautical sectionals use latitude and longitude coordinates.
                  Knots remain the only speed unit that maps directly to angular degrees and minutes on Earth&apos;s surface.
                </p>
              </div>
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  Aeronautical Airspeed Terminology
                </h3>
                <p className="text-xs leading-relaxed">
                  Aircraft instruments differentiate between <strong>Knots Indicated Airspeed (KIAS)</strong> — which measures the dynamic pressure
                  of airflow over the wings governing aerodynamic stall and lift — and <strong>Knots Groundspeed (KTGS)</strong>, which measures true
                  velocity over terrain via satellite GNSS.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Conversion Shortcuts and Benchmarks */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Mental Conversion Shortcuts &amp; Real-World Benchmarks
            </h2>
            <p className="mb-3">
              When converting knots to land units mentally, use these quick approximations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-4">
              <li><strong>Knots to km/h:</strong> Multiply by 2, then subtract roughly 10% (e.g. 30 kn &times; 2 = 60; 60 - 6 = 54 km/h; exact: 55.56 km/h).</li>
              <li><strong>Knots to mph:</strong> Add roughly 15% (e.g. 20 kn &times; 1.15 = 23 mph; exact: 23.02 mph).</li>
            </ul>

            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Vessel / Craft</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Speed in Knots</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Metric (km/h)</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Imperial (mph)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Sailing Yacht (Cruising)', '6–8 kn', '11.1–14.8 km/h', '6.9–9.2 mph'],
                    ['Container Ship (Panamax)', '18–24 kn', '33.3–44.4 km/h', '20.7–27.6 mph'],
                    ['Speedboat / Water Skiing', '30–40 kn', '55.6–74.1 km/h', '34.5–46.0 mph'],
                    ['Naval Destroyer (Top speed)', '32+ kn', '59.3+ km/h', '36.8+ mph'],
                    ['Commercial Jet (Cruise)', '450–500 kn', '833–926 km/h', '518–575 mph'],
                  ].map(([vessel, kn, kmh, mph], i) => (
                    <tr
                      key={vessel}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{vessel}</td>
                      <td className="px-4 py-2.5">{kn}</td>
                      <td className="px-4 py-2.5">{kmh}</td>
                      <td className="px-4 py-2.5">{mph}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Convert Knots to km/h and mph
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Use our verified conversion calculators with complete reference tables.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                href="/speed-converter/knots-to-kmh"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm no-underline"
                style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
              >
                Knots to km/h Converter →
              </Link>
              <Link
                href="/speedometer"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
              >
                Live GPS Speedometer in Knots
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
                href="/guides/speed-units-explained"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                Speed Units Explained
              </Link>
              <Link
                href="/guides/kmh-vs-mph"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                km/h vs mph
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

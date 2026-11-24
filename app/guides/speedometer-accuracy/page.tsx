import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Speedometer Accuracy: Mechanical vs GPS',
  description:
    'Technical analysis of vehicle speedometer accuracy regulations, calibration margins under UN ECE Regulation 39, and how GPS compares with mechanical sensors.',
  alternates: { canonical: '/guides/speedometer-accuracy' },
  openGraph: {
    title: 'Speedometer Accuracy: Mechanical vs GPS',
    description:
      'Technical analysis of vehicle speedometer accuracy regulations, calibration margins under UN ECE Regulation 39, and how GPS compares with mechanical sensors.',
    url: '/guides/speedometer-accuracy',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speedometer Accuracy: Mechanical vs GPS',
    description:
      'Technical analysis of vehicle speedometer accuracy regulations, calibration margins under UN ECE Regulation 39, and how GPS compares with mechanical sensors.',
  },
};

export default function SpeedometerAccuracyPage() {
  const baseUrl = getBaseUrl();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Speedometer Accuracy: Mechanical, Electronic & GPS Compared',
    description:
      'Technical analysis of vehicle speedometer accuracy regulations, calibration margins under UN ECE Regulation 39, and how GPS compares with mechanical sensors.',
    url: `${baseUrl}/guides/speedometer-accuracy`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/speedometer-accuracy`,
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
        name: 'Speedometer Accuracy',
        item: `${baseUrl}/guides/speedometer-accuracy`,
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
          <span style={{ color: 'var(--text-secondary)' }}>Speedometer Accuracy</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Speedometer Accuracy: Mechanical, Electronic &amp; GPS Compared
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            How do vehicle speedometers calculate velocity, what engineering tolerances apply, and why do physical tire
            dynamics cause readings to vary from satellite ground speed?
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Executive Summary */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Core Finding
            </p>
            <p>
              Vehicle speedometers do not measure true ground displacement; they measure rotational frequency of the wheel hub or transmission output shaft.
              International automotive regulations (notably UN ECE Regulation 39) strictly forbid speedometers from under-reporting true vehicle speed,
              while permitting positive over-reading. As a result, factory speedometers indicate slightly above true ground speed.
            </p>
          </div>

          {/* Section 1: Instrument Engineering */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Three Generations of Speedometer Engineering
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  1. Mechanical Speedometers (Eddy-Current Drag Cup)
                </h3>
                <p>
                  Classic vehicles use a flexible mechanical drive cable geared into the transmission. The cable spins a permanent magnet inside
                  an aluminum drag cup attached to the gauge needle. As the magnet rotates, it creates eddy currents that exert a magnetic torque
                  proportional to rotational speed, balanced against a calibrated hairspring. Mechanical drag cups are prone to friction wear, spring
                  fatigue, and temperature sensitivity, typically yielding accuracy within &plusmn;4 to &plusmn;8 km/h.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  2. Electronic &amp; Digital Speedometers (Hall-Effect Pulse Counting)
                </h3>
                <p>
                  Modern vehicles use magnetic or optical sensors (typically Hall-effect sensors or inductive pickups) mounted to transmission shafts
                  or wheel hubs with toothed ABS tone rings. The sensor counts electronic pulses per second, and the vehicle Engine Control Unit (ECU)
                  computes speed based on programmed tire circumference. The signal is transmitted across the CAN bus to a stepper-motor dial or digital screen.
                  While electronically precise to &lt;1%, the displayed value is subject to wheel radius variations and regulatory calibration offsets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  3. Satellite GPS Speedometers (GNSS Doppler Velocity)
                </h3>
                <p>
                  GPS speedometers bypass mechanical and wheel rotation entirely. By analyzing the Doppler frequency shift of microwave signals
                  received from orbiting satellites, GPS calculates true ground velocity across Earth&apos;s surface. Under unobstructed open sky,
                  accuracy is typically within &plusmn;0.5 to &plusmn;1.5 km/h, unaffected by tire wear or mechanical changes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Physical Tire Variables */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Physical Variables Affecting Wheel-Based Speedometers
            </h2>
            <p className="mb-3">
              Because electronic speedometers deduce speed from revolutions per minute (RPM) using the formula{' '}
              <code className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--brand-primary)' }}>
                Speed = RPM &times; Circumference &times; 60
              </code>
              , any factor that alters tire rolling circumference directly distorts the speed reading:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Tread Wear:</strong> A new tire typically has about 8 mm of tread depth. When worn down to the legal minimum of 1.6 mm,
                the total tire diameter decreases by roughly 12.8 mm. This ~2% reduction in circumference causes the tire to rotate faster for any
                given ground speed, making the speedometer read approximately 2% higher.
              </li>
              <li>
                <strong>Tire Pressure Fluctuations:</strong> An under-inflated tire sags under vehicle load, decreasing its effective rolling radius.
                This increases wheel RPM and causes the speedometer to over-read. Conversely, over-inflation slightly increases radius.
              </li>
              <li>
                <strong>Centrifugal Expansion at Highway Speeds:</strong> At speeds exceeding 100 km/h (62 mph), centrifugal force causes radial tire
                belts to expand slightly outward, marginally increasing rolling radius.
              </li>
              <li>
                <strong>Aftermarket Wheels and Sizes:</strong> Replacing factory wheels with plus-sized rims or different aspect ratios without recalibrating
                the vehicle ECU can alter speedometer readouts significantly.
              </li>
            </ul>
          </section>

          {/* Section 3: Legal Regulations */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              International Regulatory Standards: UN ECE Regulation 39
            </h2>
            <p className="mb-3">
              In automotive type-approval under <strong>UN ECE Regulation 39</strong> (adopted across Europe, Japan, Australia, and many other nations),
              production speedometers must conform to strict tolerance boundaries:
            </p>
            <div
              className="rounded-lg p-4 text-sm font-mono text-center my-3"
              style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
            >
              0 &le; (V<sub>1</sub> - V<sub>2</sub>) &le; 0.1 &times; V<sub>2</sub> + 4 km/h
            </div>
            <p className="mb-3">
              Where <strong>V<sub>1</sub></strong> is the indicated speed on the dashboard and <strong>V<sub>2</sub></strong> is the true vehicle speed.
              The lower limit (<code>0 &le; V<sub>1</sub> - V<sub>2</sub></code>) legally forbids the speedometer from displaying a value below actual speed.
              The upper limit sets a permissible margin of positive error. For example, at a true speed of 100 km/h, the speedometer may read anywhere
              between 100.0 km/h and 114.0 km/h, but never 99.9 km/h.
            </p>
            <p>
              To guarantee that a vehicle complies with this regulation across all approved tire sizes, tire pressures, and maximum tread wear states,
              manufacturers calibrate baseline dashboard firmware to read slightly above true speed under nominal conditions.
            </p>
          </section>

          {/* Section 4: Comparison Table */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Speed Measurement Technology Comparison
            </h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Technology
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Accuracy Margin
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Key Vulnerability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mechanical (Cable)', '±4 to ±8 km/h', 'Cable friction, hairspring fatigue, needle bounce'],
                    ['Digital Dashboard (ECU/ABS)', '±2 to ±5% (positive offset)', 'Tire pressure, tread wear, factory positive tolerance'],
                    ['GPS Speedometer (Doppler)', '±0.5 to ±1.5 km/h', 'Tunnels, urban high-rise multipath reflections'],
                    ['Optical Ground Sensors (Lab)', '±0.1 km/h', 'High cost; requires external vehicle mounting'],
                  ].map(([tech, acc, vuln], i) => (
                    <tr
                      key={tech}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>
                        {tech}
                      </td>
                      <td className="px-4 py-2.5">{acc}</td>
                      <td className="px-4 py-2.5" style={{ color: 'var(--text-tertiary)' }}>
                        {vuln}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Compare Your Dashboard Against Satellite Speed
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Use our live online GPS speedometer to see how your vehicle dashboard aligns with satellite ground velocity.
            </p>
            <Link
              href="/speedometer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline"
              style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
            >
              Launch GPS Speedometer →
            </Link>
          </div>

          {/* Related Guides */}
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-primary)' }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Related Guides
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/guides/gps-speed-vs-car-speedometer"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                GPS vs Car Speedometer
              </Link>
              <Link
                href="/guides/how-accurate-is-gps-speed"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                GPS Speed Accuracy
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

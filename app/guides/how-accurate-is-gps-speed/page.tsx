import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'How Accurate Is GPS Speed?',
  description:
    'Detailed technical guide on GPS speed accuracy factors. Understand receiver hardware, satellite geometry, signal blockage, and Doppler velocity calculations.',
  alternates: { canonical: '/guides/how-accurate-is-gps-speed' },
  openGraph: {
    title: 'How Accurate Is GPS Speed?',
    description:
      'Detailed technical guide on GPS speed accuracy factors. Understand receiver hardware, satellite geometry, signal blockage, and Doppler velocity calculations.',
    url: '/guides/how-accurate-is-gps-speed',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Accurate Is GPS Speed?',
    description:
      'Detailed technical guide on GPS speed accuracy factors. Understand receiver hardware, satellite geometry, signal blockage, and Doppler velocity calculations.',
  },
};

export default function HowAccurateIsGpsSpeedPage() {
  const baseUrl = getBaseUrl();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'How Accurate Is GPS Speed? Key Factors & Environmental Influences',
    description:
      'Detailed technical guide on GPS speed accuracy factors. Understand receiver hardware, satellite geometry, signal blockage, and Doppler velocity calculations.',
    url: `${baseUrl}/guides/how-accurate-is-gps-speed`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/how-accurate-is-gps-speed`,
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
        name: 'GPS Accuracy',
        item: `${baseUrl}/guides/how-accurate-is-gps-speed`,
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
          <span style={{ color: 'var(--text-secondary)' }}>GPS Accuracy</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            How Accurate Is GPS Speed? Key Factors &amp; Environmental Influences
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Satellite-based speed measurement is widely used in automotive navigation, aviation, and smartphone applications.
            Here is an objective look at how GPS velocity is computed, what influences measurement accuracy, and why readings
            vary across devices and environments.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Quick Summary Card */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Quick Answer
            </p>
            <p>
              GPS speed accuracy is not a single fixed figure. In practical everyday use, GNSS speed accuracy depends heavily on
              receiver hardware, antenna design, satellite geometry, signal blockage, atmospheric conditions, and vehicle dynamics.
              While Doppler-derived velocity can provide useful and responsive speed estimates during steady motion under open skies,
              actual accuracy varies considerably between different devices and environments.
            </p>
          </div>

          {/* Section 1: Measurement Methods */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              How GPS Determines Velocity: Doppler Shift vs. Position Deltas
            </h2>
            <p className="mb-3">
              Many people assume a GPS speedometer works simply by recording latitude and longitude once per second and dividing the distance
              by elapsed time. While this &quot;position delta&quot; method is used as a fallback when signal quality is marginal, it is prone to noise:
              small positional uncertainties can produce erratic speed spikes when differentiated over short intervals.
            </p>
            <p className="mb-3">
              Modern GNSS (Global Navigation Satellite System) receivers primarily estimate velocity using the <strong>Doppler frequency shift</strong> of
              incoming satellite radio waves. Because orbiting satellites broadcast carrier signals at known frequencies, relative motion between the satellite
              and receiver causes minute frequency shifts. By resolving Doppler measurements across multiple satellites simultaneously, the receiver
              computes a direct velocity vector that is substantially smoother and more responsive than simple coordinate differencing.
            </p>
            <p>
              Empirical investigations, including research by Witte and Wilson on non-differential GPS speed determination, demonstrate that Doppler-derived
              measurements can provide an effective ground-speed estimate during steady-state motion. However, these studies also demonstrate that accuracy
              degrades significantly during rapid acceleration, sharp cornering, or when satellite signals are partially blocked.
            </p>
          </section>

          {/* Section 2: Space Segment vs Smartphone Reality */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Signal-in-Space Specifications vs. Smartphone Reality
            </h2>
            <p className="mb-3">
              According to official U.S. government performance standards published on <strong>GPS.gov</strong>, the GPS space segment delivers an
              exceptionally stable signal, specifying a User Range Rate Error (URRE) of &le; 0.006 m/s over any 3-second interval under nominal conditions.
            </p>
            <p>
              However, <strong>GPS.gov explicitly emphasizes that space-segment specifications are not a direct guarantee of consumer smartphone speed accuracy</strong>.
              A consumer mobile device must contend with real-world variables that satellite transmitters cannot control: compact internal patch antennas,
              power-saving operating system constraints, radio-frequency noise from cellular modems, atmospheric signal refraction, and physical obstructions.
            </p>
          </section>

          {/* Section 3: Factors Influencing Accuracy */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Primary Factors Influencing Measurement Accuracy
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  1. Satellite Geometry and Dilution of Precision (DOP)
                </h3>
                <p>
                  To compute a reliable 3D velocity vector, your receiver needs clear line-of-sight signals from multiple satellites distributed widely
                  across the sky. When visible satellites are clustered closely together, geometric dilution of precision (HDOP/PDOP) increases,
                  multiplying measurement uncertainty.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  2. Multipath Signal Reflections
                </h3>
                <p>
                  In urban environments with tall buildings (&quot;urban canyons&quot;), or alongside steep rock faces, satellite signals reflect off
                  vertical surfaces before reaching your antenna. These delayed, reflected paths distort carrier wave phases, degrading both position
                  and speed calculations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  3. Atmospheric and Ionospheric Refraction
                </h3>
                <p>
                  Radio waves travel through Earth&apos;s ionosphere and troposphere, where charged particles, water vapor, and temperature layers
                  slightly bend and delay signals. While multi-band receivers (such as dual-frequency L1/L5 GNSS in newer phones) mitigate some of this
                  distortion, single-frequency receivers remain susceptible to atmospheric variability.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  4. Vehicle Dynamics and Filter Latency
                </h3>
                <p>
                  GPS velocity estimation is most consistent during steady cruising. During abrupt emergency braking or rapid acceleration, consumer
                  receivers apply mathematical smoothing filters (such as Kalman filters) across consecutive samples, introducing a slight delay
                  before the readout reflects instantaneous vehicle speed.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Environmental Performance Overview */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Environmental Performance &amp; Signal Conditions
            </h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Operating Environment
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Signal Reliability
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Key Environmental Influence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Open Highway / Rural Sky', 'Optimal', 'Unobstructed line-of-sight to high satellite count; minimal multipath'],
                    ['Suburban Roads', 'Good', 'Occasional tree canopy or residential rooftops causing minor attenuation'],
                    ['Urban Canyons (High-rises)', 'Degraded', 'Severe multipath signal reflections from glass and concrete structures'],
                    ['Dense Forest Canopy', 'Reduced', 'Foliage and moisture absorb and scatter microwave frequencies'],
                    ['Tunnels & Underpasses', 'Unavailable', 'Complete physical obstruction of satellite radio signals'],
                    ['Indoors / Basements', 'Unreliable', 'Structural building materials heavily attenuate GNSS signals'],
                  ].map(([env, rel, inf], i) => (
                    <tr
                      key={env}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>
                        {env}
                      </td>
                      <td className="px-4 py-2.5">{rel}</td>
                      <td className="px-4 py-2.5" style={{ color: 'var(--text-tertiary)' }}>
                        {inf}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Practical Tips */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Best Practices for Maximizing GPS Speed Accuracy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Provide Unobstructed Sky Visibility:</strong> Mount your device on the vehicle dashboard or windshield where the internal antenna has an open view through non-metallized glass.
              </li>
              <li>
                <strong>Allow Initial Ephemeris Lock:</strong> After tapping &quot;Start&quot;, wait 15 to 30 seconds for the receiver to download current satellite orbital data before accelerating.
              </li>
              <li>
                <strong>Mount the Device Firmly:</strong> Keep your smartphone in a rigid cradle. Handling or waving the device while in motion introduces erratic sensor accelerations.
              </li>
              <li>
                <strong>Enable High-Accuracy Mode:</strong> Ensure your mobile operating system has granted full high-accuracy location permissions rather than approximate/cellular positioning.
              </li>
              <li>
                <strong>Understand Road Incline Effects:</strong> Standard consumer GPS reports 2D horizontal ground velocity. On steep mountain grades (such as a 10% slope), actual road surface distance slightly exceeds horizontal distance by about 0.5%, a negligible difference for everyday driving.
              </li>
            </ul>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Test Your Speed in Real Time
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Open our web speedometer outdoors to observe satellite speed tracking, trip statistics, and accuracy metrics.
            </p>
            <Link
              href="/speedometer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline"
              style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
            >
              Open GPS Speedometer →
            </Link>
          </div>

          {/* Related Guides */}
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-primary)' }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Related Guides
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/guides/how-gps-speed-works"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                How GPS Speed Works
              </Link>
              <Link
                href="/guides/gps-speed-vs-car-speedometer"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                GPS vs Car Speedometer
              </Link>
              <Link
                href="/guides/phone-as-speedometer"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                Phone as Speedometer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

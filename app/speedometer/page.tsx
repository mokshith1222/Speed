import type { Metadata } from 'next';
import Link from 'next/link';
import Speedometer from '@/components/Speedometer';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Real-Time GPS Speedometer — Free Speed Tracker',
  description:
    'Free online GPS speedometer to measure your real-time speed in km/h, mph, knots, and m/s. Browser-based satellite tracking with analog and digital displays.',
  keywords: [
    'GPS speedometer',
    'online speedometer',
    'speedometer online',
    'real time speedometer',
    'digital speedometer',
    'speed tracker',
    'GPS speed',
    'phone speedometer',
    'car speedometer online',
  ],
  alternates: {
    canonical: '/speedometer',
  },
  openGraph: {
    title: 'Real-Time GPS Speedometer — Free Speed Tracker',
    description:
      'Free online GPS speedometer for cars, bikes, boats, and running. Measure your real-time speed directly in your browser.',
    url: '/speedometer',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time GPS Speedometer — Free Speed Tracker',
    description:
      'Measure your real-time speed in km/h, mph, knots, and m/s directly in your browser with satellite GPS tracking.',
  },
};

export default function SpeedometerPage() {
  const baseUrl = getBaseUrl();

  // Structured data for the speedometer tool with dynamic base URL
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Real-Time GPS Speedometer Online',
    url: `${baseUrl}/speedometer`,
    description:
      'Free online GPS speedometer for cars, bikes, boats, and running. Measure your real-time speed in km/h, mph, m/s, or knots directly in your browser.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript and Geolocation API',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How accurate is the GPS speedometer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GPS speed accuracy varies with device hardware, satellite visibility, atmospheric conditions, and movement. Doppler-derived velocity under clear open skies provides responsive speed estimates, though environmental obstacles can introduce variations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the online speedometer work without internet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The web page needs an initial internet connection to load in your browser. Once loaded, velocity measurement uses direct satellite signals through your device GPS receiver, not mobile data bandwidth.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is GPS speed more accurate than my car speedometer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally yes during steady motion. Vehicle speedometers calculate velocity from wheel rotation and are legally governed by standards such as UN ECE Regulation 39, which prohibits under-reporting and permits a specified over-reading margin. GPS measures true ground movement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does the speedometer show 0?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ensure location permissions are granted in browser settings and you are physically moving outdoors. Stationary devices correctly register 0. Indoors or under heavy cover, GPS satellite signals may be shielded.',
        },
      },
    ],
  };

  const breadcrumbData = {
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
        name: 'GPS Speedometer',
        item: `${baseUrl}/speedometer`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Speedometer Tool */}
      <section className="py-8 md:py-12" aria-labelledby="speedometer-heading">
        <div className="container-main">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--brand-primary)' }}>
              Dedicated Instrument
            </p>
            <h1
              id="speedometer-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Real-Time GPS Speedometer Online
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Tap Start and grant location access to measure your live speed using satellite GPS. Includes analog dial, digital readout, and local trip statistics.
            </p>
          </div>

          <Speedometer />

          <p className="text-xs text-center mt-6 max-w-lg mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Requires GPS / location permission. Works best outdoors or in a moving vehicle. Indoor accuracy is limited by satellite visibility. GPS speed readings are estimates and should not replace your vehicle&apos;s speedometer.
          </p>
        </div>
      </section>

      {/* Educational & Technical Guide Section */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="about-heading">
        <div className="container-main max-w-3xl">
          <h2 id="about-heading" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            How the Online GPS Speedometer Works
          </h2>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                1. Satellite Doppler Shift &amp; True Ground Speed
              </h3>
              <p>
                Unlike mechanical and digital vehicle speedometers that calculate speed from wheel axle rotations, this GPS speedometer
                measures your true velocity across the Earth&apos;s surface. Modern device GPS chipsets compute velocity primarily by
                analyzing the <strong>Doppler frequency shift</strong> of incoming radio signals from orbiting GNSS satellites (GPS, Galileo,
                GLONASS). While Doppler-derived velocity provides a responsive speed estimate, GPS speed accuracy is not a single fixed figure
                and varies based on device hardware, satellite visibility, signal conditions, and movement.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                2. Browser Geolocation API &amp; Privacy Protection
              </h3>
              <p>
                This web application uses the W3C standard <code>navigator.geolocation</code> API with high-accuracy mode enabled.
                Location access is requested <strong>only when you explicitly tap &quot;Start&quot;</strong> — we never poll your position
                on page load. The speedometer processes location readings directly within your browser and does not intentionally transmit
                your GPS coordinates to our backend servers. Calculations for speed, trip distance, and averages are handled locally on your device.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                3. Why GPS Speed May Differ From Your Vehicle Speedometer
              </h3>
              <p>
                Drivers sometimes notice differences between their vehicle&apos;s dashboard display and a GPS speed reading.
                Vehicle speedometers measure wheel or transmission rotation, which varies with tire pressure, tread wear, and load.
                Under international regulatory frameworks such as <strong>UN ECE Regulation 39</strong>, production vehicle speedometers
                are prohibited from under-reporting true vehicle speed, while a defined margin of positive over-reading is permitted.
                Because of these regulatory tolerances and practical wheel-measurement factors, dashboard speedometers often indicate
                slightly higher than true ground speed, whereas satellite GPS measures ground motion directly.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                4. Tips for Maximum Accuracy
              </h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Clear Sky Visibility:</strong> GPS signals operate in the microwave radio spectrum and require an unobstructed line-of-sight to at least 4 satellites. Thick concrete, tunnels, and deep parking garages block reception.</li>
                <li><strong>Initial Satellite Lock:</strong> Allow 10 to 30 seconds after tapping Start for your device&apos;s receiver to lock onto strong satellite ephemeris data before accelerating.</li>
                <li><strong>Device Positioning:</strong> For vehicle use, place your phone on a secure dashboard mount with a clear view through the windshield.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)' }}>
              <strong>Safety Reminder:</strong> Never adjust or handle your device while actively driving. Mount your device securely before departure, or have a passenger operate the tool. GPS speed is an informative reference tool and should not replace certified vehicle instrumentation.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16" aria-labelledby="faq-heading">
        <div className="container-main max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How accurate is the GPS speedometer?',
                a: 'In open areas with clear sky, GPS speed is typically accurate within ±1-2 km/h. Accuracy may decrease in urban canyons, tunnels, dense forests, or areas with poor satellite signal. For best results, use outdoors with your device having clear sky visibility.',
              },
              {
                q: 'Does it work without internet?',
                a: 'The page needs internet to load initially. Once loaded, speed measurement uses GPS satellites directly — not your mobile data. GPS functionality does not require an active internet connection.',
              },
              {
                q: 'Is GPS speed more accurate than my car speedometer?',
                a: 'Generally yes. Vehicle speedometers measure wheel rotation and are legally required to never read lower than actual speed, so they typically read 2-5% higher. GPS measures actual ground speed via satellite positioning.',
              },
              {
                q: 'Why does it show 0 km/h?',
                a: 'Make sure you have granted location permission. Ensure you are actually moving — GPS measures ground speed. Indoor or poor satellite visibility can prevent GPS lock. Try an open outdoor area.',
              },
              {
                q: 'What speed units are supported?',
                a: 'km/h (kilometers per hour), mph (miles per hour), m/s (meters per second), and knots (nautical miles per hour — used in maritime and aviation).',
              },
              {
                q: 'Is my location data stored?',
                a: 'No. All GPS processing happens locally in your browser. Your precise location is never sent to our servers or any third party. We value your privacy.',
              },
              {
                q: 'Can I use it for cycling, boating, or running?',
                a: 'Absolutely. The GPS speedometer works for any moving activity — driving, cycling, running, boating, skiing, and more. Simply choose the appropriate speed unit.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl border group"
                style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-card)' }}
              >
                <summary
                  className="px-5 py-4 cursor-pointer text-sm font-medium list-none flex items-center justify-between"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {faq.q}
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    className="shrink-0 ml-2 transition-transform group-open:rotate-180"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides & Tools */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="related-heading">
        <div className="container-main max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 id="related-heading" className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Learn More About GPS Speed &amp; Tools
              </h2>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                Technical guides explaining satellite velocity, accuracy factors, and unit conversion.
              </p>
            </div>
            <Link
              href="/guides"
              className="text-xs font-semibold no-underline hover:underline shrink-0"
              style={{ color: 'var(--brand-primary)' }}
            >
              All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/guides/how-gps-speed-works"
              className="p-4 rounded-xl border no-underline transition-colors block"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--brand-primary)' }}>
                How GPS Speed Works →
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Understand Doppler frequency shift and how satellites compute velocity.
              </p>
            </Link>
            <Link
              href="/guides/gps-speed-vs-car-speedometer"
              className="p-4 rounded-xl border no-underline transition-colors block"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--brand-primary)' }}>
                GPS vs. Car Speedometer →
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Why vehicle dashboards indicate slightly higher than satellite ground speed.
              </p>
            </Link>
            <Link
              href="/guides/how-accurate-is-gps-speed"
              className="p-4 rounded-xl border no-underline transition-colors block"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--brand-primary)' }}>
                GPS Speed Accuracy Factors →
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                How satellite geometry, atmospheric refraction, and urban canyons impact readings.
              </p>
            </Link>
            <Link
              href="/guides/phone-as-speedometer"
              className="p-4 rounded-xl border no-underline transition-colors block"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--brand-primary)' }}>
                Phone as Speedometer Guide →
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Setup instructions, mounting tips, and the W3C Screen Wake Lock API.
              </p>
            </Link>
          </div>

          <div
            className="mt-6 p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                Need to convert speed units?
              </p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                Convert between km/h, mph, knots, and m/s with verified formulas and tables.
              </p>
            </div>
            <Link
              href="/speed-converter"
              className="px-4 py-2 rounded-lg text-xs font-semibold no-underline transition-colors shrink-0"
              style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
            >
              Open Speed Converter →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Speedometer from '@/components/Speedometer';

export const metadata: Metadata = {
  title: 'GPS Speedometer Online — Free Real-Time Speed Tracker',
  description:
    'Free online GPS speedometer for cars, bikes, boats, and more. Measure your real-time speed in km/h, mph, m/s, or knots directly in your browser. No download required.',
  keywords: [
    'GPS speedometer',
    'online speedometer',
    'speedometer online',
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
    title: 'GPS Speedometer Online — Free Real-Time Speed Tracker',
    description:
      'Free online GPS speedometer for cars, bikes, boats, and more. Measure your real-time speed directly in your browser.',
    url: '/speedometer',
  },
};

// Structured data for the speedometer tool
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'GPS Speedometer Online',
  url: 'https://speedometer.tools/speedometer',
  description:
    'Free online GPS speedometer for cars, bikes, boats, and more. Measure your real-time speed in km/h, mph, m/s, or knots directly in your browser.',
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
        text: 'In open areas with clear sky and good satellite reception, GPS speed readings are typically accurate within ±1-2 km/h. Accuracy may decrease in urban areas, tunnels, or dense forests. GPS speed is often more accurate than a vehicle\'s mechanical speedometer, which manufacturers typically calibrate to read slightly high.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the online speedometer work without internet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The page needs an internet connection to load initially. However, once loaded, speed measurement uses GPS satellites directly — not your mobile data. GPS functionality does not require an active internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is GPS speed more accurate than my car speedometer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally yes. Car speedometers measure wheel rotation and are legally required to never read lower than actual speed, so they often read 2-5% higher. GPS measures true ground movement via satellites and is generally more accurate, though it may lag slightly in rapidly changing speed conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the speedometer show 0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Make sure you have granted location permission to your browser. Ensure you are actually moving — GPS measures ground speed. Indoors or in places with poor satellite visibility, the GPS may not lock on. Try moving to an open outdoor area.',
      },
    },
  ],
};

export default function SpeedometerPage() {
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

      {/* Speedometer Tool */}
      <section className="py-8 md:py-12" aria-labelledby="speedometer-heading">
        <div className="container-main">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--brand-primary)' }}>
              Free Online Tool
            </p>
            <h1
              id="speedometer-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              GPS Speedometer
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Tap Start and allow location access. Your speed will be displayed in real time using your device GPS.
            </p>
          </div>

          <Speedometer />

          <p className="text-xs text-center mt-6 max-w-lg mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Requires GPS / location permission. Works best outdoors or in a moving vehicle. Indoor accuracy is limited by satellite visibility. GPS speed readings are estimates and should not replace your vehicle&apos;s speedometer.
          </p>
        </div>
      </section>

      {/* About Section (for SEO) */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="about-heading">
        <div className="container-main max-w-3xl">
          <h2 id="about-heading" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            About This GPS Speedometer
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              A GPS speedometer uses the Global Positioning System to determine and display speed based on distance traveled over time
              using satellite signals. Unlike traditional speedometers that rely on wheel rotation, GPS speed measures true ground
              movement — making it applicable to any vehicle or activity.
            </p>
            <p>
              This free online GPS speedometer accesses your device&apos;s GPS sensor to get real-time location data and calculates
              your speed based on changes in position over time. Simply enable location services, press Start, and you&apos;ll see
              your live speed instantly. The display updates automatically as your speed changes.
            </p>
            <p>
              You can switch between km/h, mph, m/s, and knots at any time. The tool also tracks maximum speed, average speed,
              trip distance, and duration. All data is processed locally on your device — your location is never sent to any server.
            </p>
            <p>
              <strong>Important:</strong> GPS speed readings are estimates. Accuracy depends on satellite visibility, device hardware,
              and environmental conditions. This tool should not replace legally required vehicle instrumentation.
              Do not interact with your device while driving.
            </p>
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
    </>
  );
}

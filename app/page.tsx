import type { Metadata } from 'next';
import Link from 'next/link';
import Speedometer from '@/components/Speedometer';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Speedometer — Free Online GPS Speed Tracker & Velocity Tools',
  description:
    'Free online GPS speedometer and velocity suite. Measure your live speed in your browser, convert km/h, mph, knots, and m/s, and explore technical speed guides.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Speedometer — Free Online GPS Speed Tracker & Velocity Tools',
    description:
      'Free online GPS speedometer and velocity suite. Measure your live speed in your browser, convert km/h, mph, knots, and m/s, and explore technical speed guides.',
    url: '/',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speedometer — Free Online GPS Speed Tracker & Velocity Tools',
    description:
      'Free online GPS speedometer and velocity suite. Measure your live speed in your browser, convert km/h, mph, knots, and m/s, and explore technical speed guides.',
  },
};

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Real-Time GPS Speed',
    description: 'Accurate speed readings using your device GPS. Works for cars, bikes, boats, and any moving activity.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M8 10v4M12 9v6M16 11v2" />
      </svg>
    ),
    title: 'Analog & Digital Display',
    description: 'Switch between a beautiful analog gauge and a clear digital readout. Both optimized for at-a-glance reading.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Trip Statistics',
    description: 'Track maximum speed, average speed, total distance, and trip duration. All processed locally on your device.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 12h8l4-8 4 16-4-8H4z" />
      </svg>
    ),
    title: 'Multiple Speed Units',
    description: 'Instantly switch between km/h, mph, knots, and m/s. Perfect for international use.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Mobile-First Design',
    description: 'Designed for phones first. Works in portrait and landscape. Large, readable speed display for safe glancing.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Privacy First',
    description: 'Your GPS data never leaves your device. All speed calculations happen locally in your browser. No tracking.',
  },
];

const TOOLS = [
  { href: '/speed-converter/kmh-to-mph', label: 'km/h → mph', description: 'Convert kilometers per hour to miles per hour' },
  { href: '/speed-converter/mph-to-kmh', label: 'mph → km/h', description: 'Convert miles per hour to kilometers per hour' },
  { href: '/speed-converter/knots-to-kmh', label: 'Knots → km/h', description: 'Convert nautical knots to kilometers per hour' },
  { href: '/speed-converter/mps-to-kmh', label: 'm/s → km/h', description: 'Convert meters per second to kilometers per hour' },
];

const GUIDES = [
  { href: '/guides/how-gps-speed-works', title: 'How GPS Speed Works', description: 'Understand how satellites and Doppler frequency shift compute ground velocity.' },
  { href: '/guides/gps-speed-vs-car-speedometer', title: 'GPS vs Car Speedometer', description: 'Why vehicle dashboards indicate higher than satellite ground speed under UN ECE Regulation 39.' },
  { href: '/guides/kmh-vs-mph', title: 'km/h vs mph Explained', description: 'Global speed limits and quick mental conversion rules.' },
  { href: '/guides/what-are-knots', title: 'What Are Knots?', description: 'The history and navigational mathematics behind nautical miles per hour.' },
];

export default function HomePage() {
  const baseUrl = getBaseUrl();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Speedometer',
    url: baseUrl,
    description:
      'Free online GPS speedometer, velocity conversion suite, and educational guides.',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Speedometer',
    url: baseUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
        aria-labelledby="hero-heading"
      >
        {/* Subtle gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.08) 0%, transparent 60%)',
          }}
        />

        <div className="container-main relative py-12 md:py-20 lg:py-24 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--brand-primary)' }}
          >
            Online Velocity Suite
          </p>
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            Online GPS Speedometer
            <br />
            <span style={{ color: 'var(--brand-primary)' }}>&amp; Speed Tools Hub</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Measure your real-time speed using satellite GPS directly in your browser.
            Convert between speed units, track trip statistics, and explore educational guides — all free with complete privacy.
          </p>

          {/* Prominent Quick-Start Speedometer Card */}
          <div
            className="max-w-xl mx-auto mb-10 p-6 md:p-8 rounded-2xl border text-left"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-primary)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div
              className="flex items-center justify-between pb-4 mb-6 border-b"
              style={{ borderColor: 'var(--border-primary)' }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--brand-primary)' }} />
                <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--text-primary)' }}>
                  Quick Speedometer
                </span>
              </div>
              <Link
                href="/speedometer"
                className="text-xs font-semibold no-underline hover:underline flex items-center gap-1.5 transition-colors"
                style={{ color: 'var(--brand-primary)' }}
                title="Open the dedicated full-screen speedometer tool"
              >
                Dedicated Full-Screen Tool →
              </Link>
            </div>

            <Speedometer />
          </div>

          {/* Quick Hub Navigation */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/speedometer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-all"
              style={{
                backgroundColor: 'var(--brand-primary)',
                color: '#000',
                boxShadow: '0 0 25px rgba(0,212,170,0.2)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Full Speedometer Page
            </Link>
            <Link
              href="/speed-converter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-colors"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
              }}
            >
              All Speed Converters
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-colors"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
              }}
            >
              Speed Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Speed Converter Tools */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="tools-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
              Conversion Tools
            </p>
            <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Instant Speed Conversions
            </h2>
            <p className="text-sm max-w-xl mx-auto mt-2" style={{ color: 'var(--text-secondary)' }}>
              Mathematically precise conversions across international metric, imperial, nautical, and SI velocity units.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl p-5 text-center transition-colors no-underline group"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                <div className="text-lg font-bold mb-1" style={{ color: 'var(--brand-primary)' }}>
                  {tool.label}
                </div>
                <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/speed-converter"
              className="text-sm font-semibold underline"
              style={{ color: 'var(--brand-primary)' }}
            >
              View All Speed Converters &amp; Formulas →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        className="py-16 md:py-24"
        aria-labelledby="features-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
              Platform Features
            </p>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Everything You Need to Track Speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-6 transition-colors"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(0,212,170,0.1)', color: 'var(--brand-primary)' }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Guides Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="guides-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
              Learn &amp; Explore
            </p>
            <h2 id="guides-heading" className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Speed &amp; GPS Guides
            </h2>
            <p className="text-sm max-w-xl mx-auto mt-2" style={{ color: 'var(--text-secondary)' }}>
              Original articles explaining satellite positioning, speedometer accuracy regulations, and unit history.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-xl p-5 transition-colors no-underline group flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                }}
              >
                <div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {guide.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {guide.description}
                  </p>
                </div>
                <span className="text-xs font-semibold mt-4 inline-block" style={{ color: 'var(--brand-primary)' }}>
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="container-main text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Ready for the Full Speedometer Experience?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Open the dedicated full-screen speedometer with HUD mode, analog dial, and local trip tracking.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/speedometer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg no-underline transition-all"
              style={{
                backgroundColor: 'var(--brand-primary)',
                color: '#000',
                boxShadow: '0 0 30px rgba(0,212,170,0.25)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Open Dedicated Speedometer
            </Link>
            <Link
              href="/speed-converter"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg no-underline transition-colors"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
              }}
            >
              Browse Converters
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

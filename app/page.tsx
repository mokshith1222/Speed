import Link from 'next/link';

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

export default function HomePage() {
  return (
    <>
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

        <div className="container-main relative py-16 md:py-24 lg:py-32 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--brand-primary)' }}
          >
            Free Online Tool
          </p>
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            GPS Speedometer
            <br />
            <span style={{ color: 'var(--brand-primary)' }}>& Speed Tools</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Measure your real-time speed using GPS directly in your browser.
            Convert between speed units, track trips, and explore speed guides — all free, no download required.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/speedometer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base no-underline transition-all"
              style={{
                backgroundColor: 'var(--brand-primary)',
                color: '#000',
                boxShadow: '0 0 30px rgba(0,212,170,0.25)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Start Speedometer
            </Link>
            <Link
              href="/speed-converter"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base no-underline transition-colors"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
              }}
            >
              Speed Converter
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        aria-labelledby="features-heading"
      >
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
              Features
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

      {/* Speed Converter Tools */}
      <section className="py-16 md:py-24" aria-labelledby="tools-heading">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
              Conversion Tools
            </p>
            <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Instant Speed Conversions
            </h2>
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
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        aria-labelledby="cta-heading"
      >
        <div className="container-main text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Ready to Check Your Speed?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Open the speedometer, allow GPS access, and see your speed instantly. Free, private, and works on any device.
          </p>
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
            Start Speedometer
          </Link>
        </div>
      </section>
    </>
  );
}

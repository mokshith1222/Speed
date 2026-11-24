import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Speedometer — a free browser-based GPS speed tracker, velocity conversion suite, and educational resource built with local privacy in mind.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us',
    description:
      'Learn about Speedometer — a free browser-based GPS speed tracker, velocity conversion suite, and educational resource.',
    url: '/about',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us',
    description:
      'Learn about Speedometer — a free browser-based GPS speed tracker, velocity conversion suite, and educational resource.',
  },
};

export default function AboutPage() {
  const baseUrl = getBaseUrl();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Speedometer',
    url: `${baseUrl}/about`,
    description:
      'Learn about Speedometer — a free online GPS speed tracking platform providing real-time speed measurement, conversion tools, and educational guides.',
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
        name: 'About Us',
        item: `${baseUrl}/about`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="py-12 md:py-16">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
            About Speedometer
          </h1>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              <strong style={{ color: 'var(--text-primary)' }}>Speedometer</strong> is a free online platform providing GPS-based speed
              measurement, speed unit conversion tools, and educational guides about speed, GPS technology, and speedometer accuracy.
            </p>
            <h2 className="text-xl font-semibold pt-4" style={{ color: 'var(--text-primary)' }}>What We Do</h2>
            <p>
              Our primary tool is a browser-based GPS speedometer that uses your device&apos;s built-in GPS sensor to measure and
              display your current speed in real time. No app download is required — it works directly in your web browser on
              smartphones, tablets, and computers.
            </p>
            <p>
              We also provide speed unit conversion tools (km/h, mph, knots, m/s) and educational guides explaining how GPS speed
              measurement works, how it compares to vehicle speedometers, and other speed-related topics.
            </p>
            <h2 className="text-xl font-semibold pt-4" style={{ color: 'var(--text-primary)' }}>How It Works</h2>
            <p>
              The GPS speedometer accesses your device&apos;s location services (with your permission) and calculates speed based on
              changes in GPS position over time. All processing happens locally in your browser — your location data is never sent
              to our servers or any third party.
            </p>
            <h2 className="text-xl font-semibold pt-4" style={{ color: 'var(--text-primary)' }}>Important Disclaimer</h2>
            <p>
              GPS speed readings are estimates based on satellite positioning. They should not be used as a replacement for legally
              required vehicle instrumentation. Never interact with your device while driving. Always prioritize road safety.
            </p>
            <h2 className="text-xl font-semibold pt-4" style={{ color: 'var(--text-primary)' }}>Our Tools</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><Link href="/speedometer" className="underline" style={{ color: 'var(--brand-primary)' }}>GPS Speedometer</Link> — Real-time speed tracking</li>
              <li><Link href="/speed-converter" className="underline" style={{ color: 'var(--brand-primary)' }}>Speed Converter</Link> — Convert between speed units</li>
              <li><Link href="/guides" className="underline" style={{ color: 'var(--brand-primary)' }}>Guides</Link> — Learn about speed measurement</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Speed & GPS Guides — Velocity Articles',
  description:
    'Explore educational guides on GPS speed measurement, speedometer accuracy laws, velocity unit conversion, and navigation history.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Speed & GPS Guides — Velocity Articles',
    description:
      'Explore educational guides on GPS speed measurement, speedometer accuracy laws, velocity unit conversion, and navigation history.',
    url: '/guides',
    siteName: 'Speedometer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed & GPS Guides — Velocity Articles',
    description:
      'Educational guides on GPS speed measurement, speedometer accuracy, and speed unit conversions.',
  },
};

const GUIDES = [
  {
    slug: 'how-gps-speed-works',
    title: 'How GPS Speed Measurement Works',
    excerpt: 'Understand the technology behind GPS speed — from satellite signals to the speed value on your screen.',
    category: 'GPS Speed',
  },
  {
    slug: 'gps-speed-vs-car-speedometer',
    title: 'GPS Speed vs Car Speedometer — Which Is More Accurate?',
    excerpt: 'Why your car speedometer reads higher than GPS, and which measurement you should trust.',
    category: 'GPS Speed',
  },
  {
    slug: 'how-accurate-is-gps-speed',
    title: 'How Accurate Is GPS Speed?',
    excerpt: 'Factors affecting GPS speed accuracy, typical error ranges, and how to get the best readings.',
    category: 'GPS Speed',
  },
  {
    slug: 'phone-as-speedometer',
    title: 'How to Use Your Phone as a Speedometer',
    excerpt: 'A practical guide to using your smartphone as a GPS speedometer — step by step.',
    category: 'GPS Speed',
  },
  {
    slug: 'kmh-vs-mph',
    title: 'km/h vs mph — Understanding Speed Units',
    excerpt: 'Which countries use km/h, which use mph, and why the world can\'t agree on one standard.',
    category: 'Speed Units',
  },
  {
    slug: 'what-are-knots',
    title: 'What Are Knots? Speed Unit Explained',
    excerpt: 'Why sailors and pilots use knots instead of km/h — the history and math behind nautical speed.',
    category: 'Speed Units',
  },
  {
    slug: 'speed-units-explained',
    title: 'Speed Units Explained — km/h, mph, m/s, knots',
    excerpt: 'A comprehensive guide to all major speed units, their origins, and when each is used.',
    category: 'Speed Units',
  },
  {
    slug: 'speedometer-accuracy',
    title: 'Speedometer Accuracy — Digital, Mechanical & GPS Compared',
    excerpt: 'How different types of speedometers measure speed and which delivers the most accurate reading.',
    category: 'Speedometers',
  },
];

export default function GuidesPage() {
  const categories = [...new Set(GUIDES.map((g) => g.category))];
  const baseUrl = getBaseUrl();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Speed & GPS Educational Guides',
    url: `${baseUrl}/guides`,
    description:
      'Educational guides on GPS speed tracking, vehicle speedometer accuracy, and speed unit conversion.',
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="py-12 md:py-16">
        <div className="container-main">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--brand-primary)' }}>
              Learn
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Speed & GPS Guides
            </h1>
            <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
              Original articles explaining how GPS speed works, speedometer accuracy, speed unit conversions, and more.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {GUIDES.filter((g) => g.category === category).map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="rounded-xl p-5 no-underline transition-colors"
                    style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}
                  >
                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {guide.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {guide.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

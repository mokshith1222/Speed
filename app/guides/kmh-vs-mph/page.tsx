import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'km/h vs mph — Understanding Speed Units Across the World',
  description:
    'Learn the differences between kilometers per hour (km/h) and miles per hour (mph), historical adoption, and how to convert between them easily.',
  alternates: { canonical: '/guides/kmh-vs-mph' },
};

export default function Page() {
  return (
    <article className="py-12 md:py-16">
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
          <span style={{ color: 'var(--text-secondary)' }}>km/h vs mph</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            km/h vs. mph: Differences, Global Adoption &amp; Mental Conversion Tricks
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Why does the United States and the United Kingdom continue to use miles per hour while most of the planet
            uses kilometers per hour? Discover the mathematical ratios, global road customs, and practical conversion shortcuts.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Key Conversion Factor Box */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Exact Mathematical Definition
            </p>
            <p>
              By international treaty (the 1959 International Yard and Pound Agreement), one international mile is defined as exactly <strong>1,609.344 meters</strong>.
              Consequently, <strong>1 mph = exactly 1.609344 km/h</strong>, and <strong>1 km/h &approx; 0.621371 mph</strong>.
            </p>
          </div>

          {/* Section 1: The Fibonacci Conversion Method */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              The Fibonacci Sequence: The Ultimate Mental Conversion Hack
            </h2>
            <p className="mb-3">
              Because the conversion factor between miles and kilometers (1.609344) is remarkably close to the Golden Ratio (&phi; &approx; 1.618033),
              you can use adjacent numbers in the famous <strong>Fibonacci sequence</strong> to convert between mph and km/h in your head without a calculator:
            </p>
            <div
              className="p-4 rounded-xl border text-center my-3 font-mono text-sm"
              style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}
            >
              1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
            </div>
            <p className="mb-3">
              Each pair of consecutive numbers gives an immediate approximate conversion: the smaller number is <strong>mph</strong> and the larger number is <strong>km/h</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mb-3">
              <li><strong>5 mph</strong> &approx; <strong>8 km/h</strong> (exact: 8.05 km/h)</li>
              <li><strong>13 mph</strong> &approx; <strong>21 km/h</strong> (exact: 20.92 km/h)</li>
              <li><strong>21 mph</strong> &approx; <strong>34 km/h</strong> (exact: 33.80 km/h)</li>
              <li><strong>34 mph</strong> &approx; <strong>55 km/h</strong> (exact: 54.72 km/h)</li>
              <li><strong>55 mph</strong> &approx; <strong>89 km/h</strong> (exact: 88.51 km/h)</li>
              <li><strong>89 mph</strong> &approx; <strong>144 km/h</strong> (exact: 143.23 km/h)</li>
            </ul>
            <p>
              For intermediate numbers, you can break them down linearly. For instance, to convert 60 mph: since 60 is 55 + 5,
              add the corresponding km/h values (89 + 8 = 97 km/h; exact: 96.56 km/h).
            </p>
          </section>

          {/* Section 2: Global Adoption Map */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Global Adoption: Who Uses Which Standard?
            </h2>
            <p className="mb-3">
              Over <strong>90% of the world&apos;s population</strong> lives in countries that use kilometers per hour exclusively for roadway speed limits,
              navigation, and vehicle odometers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'var(--brand-primary)' }}>
                  km/h Countries (Metric Standard)
                </h3>
                <ul className="text-xs space-y-1 list-disc pl-4" style={{ color: 'var(--text-secondary)' }}>
                  <li>All of Continental Europe (France, Germany, Italy, Spain, Poland, etc.)</li>
                  <li>Canada (metricated in 1977) and Australia (metricated in 1974)</li>
                  <li>All of Latin America (Mexico, Brazil, Argentina, Colombia)</li>
                  <li>All of Asia and Africa (China, India, Japan, South Africa)</li>
                  <li>New Zealand, Ireland, and Scandinavia</li>
                </ul>
              </div>
              <div
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  mph Countries (Imperial Standard)
                </h3>
                <ul className="text-xs space-y-1 list-disc pl-4" style={{ color: 'var(--text-secondary)' }}>
                  <li>United States of America and its territories (Guam, Puerto Rico, USVI)</li>
                  <li>United Kingdom (Northern Ireland, Scotland, England, Wales)</li>
                  <li>Certain Caribbean nations (Bahamas, Antigua &amp; Barbuda, Belize)</li>
                  <li>Liberia and Myanmar (hybrid/customary systems)</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              <em>Note on the United Kingdom:</em> The UK presents a unique hybrid system. Road distance and speed limit signs are legally in miles and mph,
              yet petrol is sold in liters, car length is given in meters, and vehicle speedometers must legally display both mph and km/h.
            </p>
          </section>

          {/* Section 3: Benchmark Speed Limits */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Standard International Speed Limits Compared
            </h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Driving Zone</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Metric Standard (km/h)</th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>US/UK Equivalent (mph)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['School Zones / Traffic-Calmed Areas', '30 km/h', '18.6 mph (posted as 20 mph)'],
                    ['Urban City Streets', '50 km/h', '31.1 mph (posted as 30 mph)'],
                    ['Rural Two-Lane Secondary Roads', '80 to 90 km/h', '50 to 56 mph (posted as 50–55 mph)'],
                    ['Standard Motorway / Interstate', '100 to 120 km/h', '62 to 75 mph (posted as 65–75 mph)'],
                    ['German Autobahn (Advisory speed)', '130 km/h (recommended)', '80.8 mph (unrestricted sections)'],
                  ].map(([zone, km, mi], i) => (
                    <tr
                      key={zone}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>{zone}</td>
                      <td className="px-4 py-2.5">{km}</td>
                      <td className="px-4 py-2.5">{mi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Convert Between km/h and mph Instantly
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Use our dedicated conversion calculators with complete reference tables and formula breakdowns.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                href="/speed-converter/kmh-to-mph"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm no-underline"
                style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
              >
                km/h to mph Converter →
              </Link>
              <Link
                href="/speed-converter/mph-to-kmh"
                className="px-5 py-2.5 rounded-xl font-semibold text-sm no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
              >
                mph to km/h Converter →
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
                href="/guides/what-are-knots"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                What Are Knots?
              </Link>
              <Link
                href="/guides/speedometer-accuracy"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                Speedometer Accuracy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

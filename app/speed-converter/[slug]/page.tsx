import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SpeedConverterWidget from '@/components/SpeedConverterWidget';
import {
  type ConversionUnit,
  CONVERSION_PAIRS,
  UNITS,
  getFormula,
  generateConversionTable,
  getCommonValues,
} from '@/lib/conversion-engine';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getPairBySlug(slug: string) {
  return CONVERSION_PAIRS.find((p) => p.slug === slug) || null;
}

export async function generateStaticParams() {
  return CONVERSION_PAIRS.map((pair) => ({
    slug: pair.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pair = getPairBySlug(slug);
  if (!pair) return {};

  const fromLabel = UNITS[pair.from].label;
  const toLabel = UNITS[pair.to].label;

  return {
    title: `${pair.title} Converter — Convert ${fromLabel} to ${toLabel}`,
    description: `Convert ${UNITS[pair.from].fullName} to ${UNITS[pair.to].fullName}. Free online ${fromLabel} to ${toLabel} calculator with conversion table and formula.`,
    alternates: {
      canonical: `/speed-converter/${slug}`,
    },
  };
}

function getPairDetails(from: ConversionUnit, to: ConversionUnit, slug: string) {
  if (slug === 'kmh-to-mph') {
    return {
      workedExample: {
        input: 100,
        result: '62.14',
        explanation: 'Multiply kilometers per hour by 0.621371 (or divide by 1.609344). For example: 100 km/h × 0.621371 = 62.14 mph.',
      },
      practicalContext:
        'Crucial for drivers crossing from metric regions (such as Canada, Mexico, or Continental Europe) into the United States or the United Kingdom. It helps motorists adhere to posted imperial highway speed limits without mental math errors.',
      benchmarks: [
        { label: 'City residential limit (30 km/h)', value: '18.6 mph (posted as 20 mph)' },
        { label: 'Urban street limit (50 km/h)', value: '31.1 mph (posted as 30 mph)' },
        { label: 'Secondary highway (80 km/h)', value: '49.7 mph (posted as 50 mph)' },
        { label: 'Expressway cruising (100 km/h)', value: '62.1 mph (posted as 60–65 mph)' },
        { label: 'Motorway speed (120 km/h)', value: '74.6 mph (posted as 70–75 mph)' },
      ],
    };
  }
  if (slug === 'mph-to-kmh') {
    return {
      workedExample: {
        input: 60,
        result: '96.56',
        explanation: 'Multiply miles per hour by exactly 1.609344. For example: 60 mph × 1.609344 = 96.56 km/h.',
      },
      practicalContext:
        'Essential for American and British drivers touring overseas, as well as imported car owners whose analog speedometer dials feature primary imperial markings.',
      benchmarks: [
        { label: 'School / residential zone (20 mph)', value: '32.2 km/h (posted as 30 km/h)' },
        { label: 'City street limit (30 mph)', value: '48.3 km/h (posted as 50 km/h)' },
        { label: 'Open two-lane road (55 mph)', value: '88.5 km/h (posted as 80–90 km/h)' },
        { label: 'Interstate highway (65 mph)', value: '104.6 km/h (posted as 100–110 km/h)' },
        { label: 'Interstate maximum (75 mph)', value: '120.7 km/h (posted as 120 km/h)' },
      ],
    };
  }
  if (slug === 'knots-to-kmh') {
    return {
      workedExample: {
        input: 35,
        result: '64.82',
        explanation: 'Multiply knots by exactly 1.852 (the international standard kilometer length of one nautical mile). For example: 35 knots × 1.852 = 64.82 km/h.',
      },
      practicalContext:
        'Used by mariners, coast guards, ferry passengers, and pilots to translate nautical chart velocities and marine weather advisories into metric road speed equivalents.',
      benchmarks: [
        { label: 'Harbor no-wake speed (5 knots)', value: '9.26 km/h' },
        { label: 'Coastal sailing cruise (8 knots)', value: '14.82 km/h' },
        { label: 'Cargo container ship (20 knots)', value: '37.04 km/h' },
        { label: 'High-speed passenger ferry (35 knots)', value: '64.82 km/h' },
        { label: 'Aviation approach speed (140 knots)', value: '259.28 km/h' },
      ],
    };
  }
  if (slug === 'mps-to-kmh') {
    return {
      workedExample: {
        input: 15,
        result: '54.00',
        explanation: 'Multiply meters per second by 3.6 (1,000 meters / 3,600 seconds). For example: 15 m/s × 3.6 = 54.0 km/h.',
      },
      practicalContext:
        'Commonly needed when interpreting scientific weather stations, wind anemometer reports (where gale warnings are given in m/s), athletic sprint telemetry, and physics experiments.',
      benchmarks: [
        { label: 'Gentle breeze (3 m/s)', value: '10.8 km/h' },
        { label: 'Strong breeze / kite flying (10 m/s)', value: '36.0 km/h' },
        { label: 'Gale force wind (17 m/s)', value: '61.2 km/h' },
        { label: 'Storm force wind (25 m/s)', value: '90.0 km/h' },
        { label: 'Hurricane threshold (33 m/s)', value: '118.8 km/h' },
      ],
    };
  }
  const factor = UNITS[from].toBase / UNITS[to].toBase;
  return {
    workedExample: {
      input: 10,
      result: (10 * factor).toFixed(2),
      explanation: `Multiply ${UNITS[from].label} by ${factor.toFixed(6)}. For example: 10 ${UNITS[from].label} × ${factor.toFixed(4)} = ${(10 * factor).toFixed(2)} ${UNITS[to].label}.`,
    },
    practicalContext: `Converts velocity from ${UNITS[from].fullName} to ${UNITS[to].fullName} using exact international standard conversion ratios.`,
    benchmarks: [],
  };
}

export default async function ConversionPage({ params }: PageProps) {
  const { slug } = await params;
  const pair = getPairBySlug(slug);
  if (!pair) notFound();

  const fromUnit = UNITS[pair.from];
  const toUnit = UNITS[pair.to];
  const formula = getFormula(pair.from, pair.to);
  const commonValues = getCommonValues(pair.from, pair.to);
  const table = generateConversionTable(pair.from, pair.to, commonValues);
  const details = getPairDetails(pair.from, pair.to, slug);

  // Other conversion pairs for internal linking
  const otherPairs = CONVERSION_PAIRS.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="py-8 md:py-12" aria-labelledby="converter-heading">
        <div className="container-main">
          {/* Breadcrumb */}
          <nav className="text-xs mb-6" aria-label="Breadcrumb" style={{ color: 'var(--text-tertiary)' }}>
            <Link href="/" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Home</Link>
            <span className="mx-2">›</span>
            <Link href="/speed-converter" className="no-underline hover:underline" style={{ color: 'var(--text-tertiary)' }}>Speed Converter</Link>
            <span className="mx-2">›</span>
            <span style={{ color: 'var(--text-secondary)' }}>{pair.title}</span>
          </nav>

          <div className="text-center mb-8">
            <h1
              id="converter-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {pair.title} Converter
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Convert {fromUnit.fullName} ({fromUnit.label}) to {toUnit.fullName} ({toUnit.label}).
              Enter a value and get instant, accurate results with our verified calculation engine.
            </p>
          </div>

          <SpeedConverterWidget defaultFrom={pair.from} defaultTo={pair.to} />

          {/* Formula */}
          <div className="text-center mt-6">
            <div
              className="inline-block px-5 py-2.5 rounded-lg text-sm font-mono font-medium"
              style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
            >
              {formula}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Table */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="table-heading">
        <div className="container-main max-w-2xl">
          <h2 id="table-heading" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            {fromUnit.label} to {toUnit.label} Conversion Table
          </h2>
          <div
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: 'var(--border-primary)' }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                  <th className="px-5 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {fromUnit.label}
                  </th>
                  <th className="px-5 py-3 text-right font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {toUnit.label}
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr
                    key={row.from}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      borderTop: '1px solid var(--border-primary)',
                    }}
                  >
                    <td className="px-5 py-2.5 tabular-nums" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-geist-mono)' }}>
                      {row.from}
                    </td>
                    <td className="px-5 py-2.5 text-right tabular-nums font-medium" style={{ color: 'var(--brand-primary)', fontFamily: 'var(--font-geist-mono)' }}>
                      {row.to}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step-by-Step Calculation Guide */}
      <section className="py-12 md:py-16" aria-labelledby="how-to-calculate">
        <div className="container-main max-w-3xl">
          <h2 id="how-to-calculate" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            How to Convert {fromUnit.label} to {toUnit.label} Step-by-Step
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              To manually convert from {fromUnit.fullName} ({fromUnit.label}) to {toUnit.fullName} ({toUnit.label}), apply the formula:
            </p>
            <div
              className="p-4 rounded-xl border text-center font-mono text-sm"
              style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}
            >
              {formula}
            </div>

            <div
              className="p-5 rounded-xl border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
            >
              <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                Worked Calculation Example ({details.workedExample.input} {fromUnit.label})
              </h3>
              <p className="mb-2">
                {details.workedExample.explanation}
              </p>
              <p className="font-mono text-xs" style={{ color: 'var(--brand-primary)' }}>
                Result: {details.workedExample.input} {fromUnit.label} = {details.workedExample.result} {toUnit.label}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                Practical Context &amp; Real-World Use
              </h3>
              <p className="mb-3">
                {details.practicalContext}
              </p>
            </div>

            {details.benchmarks.length > 0 && (
              <div>
                <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--text-primary)' }}>
                  Common Everyday Benchmarks
                </h3>
                <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
                  <table className="w-full text-xs">
                    <thead>
                      <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                        <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>Context / Zone</th>
                        <th className="px-4 py-2.5 text-right font-semibold" style={{ color: 'var(--text-primary)' }}>Equivalent Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.benchmarks.map((bm, i) => (
                        <tr
                          key={bm.label}
                          style={{
                            borderTop: '1px solid var(--border-primary)',
                            backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                          }}
                        >
                          <td className="px-4 py-2 font-medium" style={{ color: 'var(--text-primary)' }}>{bm.label}</td>
                          <td className="px-4 py-2 text-right font-mono" style={{ color: 'var(--brand-primary)' }}>{bm.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Unit Explanations */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--bg-secondary)' }} aria-labelledby="units-heading">
        <div className="container-main max-w-3xl">
          <h2 id="units-heading" className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Understanding {fromUnit.label} and {toUnit.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}
            >
              <h3 className="font-semibold mb-2" style={{ color: 'var(--brand-primary)' }}>
                {fromUnit.fullName} ({fromUnit.label})
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {fromUnit.description}
              </p>
            </div>
            <div
              className="rounded-xl p-5"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}
            >
              <h3 className="font-semibold mb-2" style={{ color: 'var(--brand-primary)' }}>
                {toUnit.fullName} ({toUnit.label})
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {toUnit.description}
              </p>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Other Speed Conversions
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherPairs.map((p) => (
                <Link
                  key={p.slug}
                  href={`/speed-converter/${p.slug}`}
                  className="px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {p.title}
                </Link>
              ))}
              <Link
                href="/speedometer"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline transition-colors"
                style={{
                  backgroundColor: 'rgba(0,212,170,0.1)',
                  color: 'var(--brand-primary)',
                }}
              >
                GPS Speedometer →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

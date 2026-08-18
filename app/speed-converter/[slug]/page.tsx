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

export default async function ConversionPage({ params }: PageProps) {
  const { slug } = await params;
  const pair = getPairBySlug(slug);
  if (!pair) notFound();

  const fromUnit = UNITS[pair.from];
  const toUnit = UNITS[pair.to];
  const formula = getFormula(pair.from, pair.to);
  const commonValues = getCommonValues(pair.from, pair.to);
  const table = generateConversionTable(pair.from, pair.to, commonValues);

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
              Enter a value and get instant, accurate results.
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

      {/* Unit Explanations */}
      <section className="py-12 md:py-16" aria-labelledby="units-heading">
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

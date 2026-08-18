/**
 * Speed Conversion Engine
 *
 * Reusable, mathematically accurate conversion module
 * for speed units: km/h, mph, knots, m/s
 */

export type ConversionUnit = 'kmh' | 'mph' | 'knots' | 'ms';

interface UnitInfo {
  id: ConversionUnit;
  label: string;
  fullName: string;
  description: string;
  /** Factor to convert TO m/s (base unit) */
  toBase: number;
}

export const UNITS: Record<ConversionUnit, UnitInfo> = {
  kmh: {
    id: 'kmh',
    label: 'km/h',
    fullName: 'Kilometers per Hour',
    description: 'The standard speed unit in most countries worldwide. Used for road speed limits, vehicle speedometers, and weather reports.',
    toBase: 1 / 3.6,
  },
  mph: {
    id: 'mph',
    label: 'mph',
    fullName: 'Miles per Hour',
    description: 'The standard speed unit in the United States, United Kingdom, and a few other countries. Used for road speed limits and vehicle speedometers.',
    toBase: 0.44704,
  },
  knots: {
    id: 'knots',
    label: 'knots',
    fullName: 'Knots (Nautical Miles per Hour)',
    description: 'The standard speed unit in maritime and aviation. One knot equals one nautical mile (1.852 km) per hour.',
    toBase: 0.514444,
  },
  ms: {
    id: 'ms',
    label: 'm/s',
    fullName: 'Meters per Second',
    description: 'The SI (International System of Units) base unit for speed. Commonly used in science, engineering, and physics.',
    toBase: 1,
  },
};

/**
 * Convert a speed value from one unit to another
 * Uses m/s as the base unit for accuracy
 */
export function convert(value: number, from: ConversionUnit, to: ConversionUnit): number {
  if (from === to) return value;
  // Convert to base (m/s), then to target
  const baseValue = value * UNITS[from].toBase;
  return baseValue / UNITS[to].toBase;
}

/**
 * Get a formatted conversion result with appropriate precision
 */
export function formatConversion(value: number, decimals: number = 4): string {
  if (Number.isInteger(value)) return value.toString();
  return parseFloat(value.toFixed(decimals)).toString();
}

/**
 * Generate a conversion table for quick reference
 */
export function generateConversionTable(
  from: ConversionUnit,
  to: ConversionUnit,
  values: number[]
): Array<{ from: number; to: number }> {
  return values.map((v) => ({
    from: v,
    to: parseFloat(convert(v, from, to).toFixed(4)),
  }));
}

/**
 * Common conversion table values for each unit pair
 */
export function getCommonValues(from: ConversionUnit, to: ConversionUnit): number[] {
  const commonSets: Record<string, number[]> = {
    'kmh-mph': [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 180, 200, 250, 300],
    'mph-kmh': [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100, 120],
    'knots-kmh': [1, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 100, 120, 150, 200, 250, 300, 500],
    'ms-kmh': [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 100, 150, 200, 250, 340],
  };

  const key = `${from}-${to}`;
  return commonSets[key] || [1, 5, 10, 20, 50, 100, 150, 200, 250, 500];
}

/**
 * Get the conversion formula as a human-readable string
 */
export function getFormula(from: ConversionUnit, to: ConversionUnit): string {
  const formulas: Record<string, string> = {
    'kmh-mph': 'mph = km/h × 0.621371',
    'mph-kmh': 'km/h = mph × 1.60934',
    'knots-kmh': 'km/h = knots × 1.852',
    'kmh-knots': 'knots = km/h × 0.539957',
    'ms-kmh': 'km/h = m/s × 3.6',
    'kmh-ms': 'm/s = km/h ÷ 3.6',
    'ms-mph': 'mph = m/s × 2.23694',
    'mph-ms': 'm/s = mph × 0.44704',
    'knots-mph': 'mph = knots × 1.15078',
    'mph-knots': 'knots = mph × 0.868976',
    'ms-knots': 'knots = m/s × 1.94384',
    'knots-ms': 'm/s = knots × 0.514444',
  };

  return formulas[`${from}-${to}`] || `${UNITS[to].label} = ${UNITS[from].label} × ${(UNITS[from].toBase / UNITS[to].toBase).toFixed(6)}`;
}

/**
 * All valid conversion pairs (for generating pages)
 */
export const CONVERSION_PAIRS: Array<{ from: ConversionUnit; to: ConversionUnit; slug: string; title: string }> = [
  { from: 'kmh', to: 'mph', slug: 'kmh-to-mph', title: 'km/h to mph' },
  { from: 'mph', to: 'kmh', slug: 'mph-to-kmh', title: 'mph to km/h' },
  { from: 'knots', to: 'kmh', slug: 'knots-to-kmh', title: 'Knots to km/h' },
  { from: 'ms', to: 'kmh', slug: 'mps-to-kmh', title: 'm/s to km/h' },
];

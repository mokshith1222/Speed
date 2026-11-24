import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  convert,
  formatConversion,
  generateConversionTable,
  getFormula,
} from '../lib/conversion-engine.ts';
import { convertSpeed } from '../lib/gps-engine.ts';

describe('Knots to km/h Conversion Precision (Critical Audit Findings)', () => {
  it('converts 35 knots to exactly 64.82 km/h (was 64.8199)', () => {
    const rawResult = convert(35, 'knots', 'kmh');
    assert.strictEqual(Number(rawResult.toFixed(4)), 64.82);
    assert.strictEqual(formatConversion(rawResult), '64.82');
  });

  it('converts 100 knots to exactly 185.2 km/h (was 185.1998)', () => {
    const rawResult = convert(100, 'knots', 'kmh');
    assert.strictEqual(Number(rawResult.toFixed(4)), 185.2);
    assert.strictEqual(formatConversion(rawResult), '185.2');
  });

  it('converts 500 knots to exactly 926.0 km/h (was 925.9992)', () => {
    const rawResult = convert(500, 'knots', 'kmh');
    assert.strictEqual(Number(rawResult.toFixed(4)), 926);
    assert.strictEqual(formatConversion(rawResult), '926');
  });
});

describe('Reverse Conversions (km/h to Knots)', () => {
  it('converts 64.82 km/h back to 35 knots', () => {
    const rawResult = convert(64.82, 'kmh', 'knots');
    assert.strictEqual(Number(rawResult.toFixed(4)), 35);
    assert.strictEqual(formatConversion(rawResult), '35');
  });

  it('converts 185.2 km/h back to 100 knots', () => {
    const rawResult = convert(185.2, 'kmh', 'knots');
    assert.strictEqual(Number(rawResult.toFixed(4)), 100);
    assert.strictEqual(formatConversion(rawResult), '100');
  });

  it('converts 926 km/h back to 500 knots', () => {
    const rawResult = convert(926, 'kmh', 'knots');
    assert.strictEqual(Number(rawResult.toFixed(4)), 500);
    assert.strictEqual(formatConversion(rawResult), '500');
  });
});

describe('Decimal and Edge Case Inputs', () => {
  it('handles 0 correctly', () => {
    assert.strictEqual(convert(0, 'knots', 'kmh'), 0);
    assert.strictEqual(formatConversion(convert(0, 'knots', 'kmh')), '0');
  });

  it('converts 1 knot to exactly 1.852 km/h', () => {
    const rawResult = convert(1, 'knots', 'kmh');
    assert.strictEqual(Number(rawResult.toFixed(4)), 1.852);
    assert.strictEqual(formatConversion(rawResult), '1.852');
  });

  it('converts 0.5 knots to exactly 0.926 km/h', () => {
    const rawResult = convert(0.5, 'knots', 'kmh');
    assert.strictEqual(Number(rawResult.toFixed(4)), 0.926);
    assert.strictEqual(formatConversion(rawResult), '0.926');
  });

  it('converts 12.345 knots to 22.8629 km/h (12.345 * 1.852)', () => {
    const expected = Number((12.345 * 1.852).toFixed(4));
    const rawResult = convert(12.345, 'knots', 'kmh');
    assert.strictEqual(Number(rawResult.toFixed(4)), expected);
    assert.strictEqual(formatConversion(rawResult), '22.8629');
  });
});

describe('Conversion Table Generation', () => {
  it('generates exact table values for audit benchmarks', () => {
    const table = generateConversionTable('knots', 'kmh', [35, 100, 500]);
    assert.deepStrictEqual(table, [
      { from: 35, to: 64.82 },
      { from: 100, to: 185.2 },
      { from: 500, to: 926 },
    ]);
  });
});

describe('Formula String Display', () => {
  it('displays accurate mph to kmh formula factor (1.609344)', () => {
    assert.strictEqual(getFormula('mph', 'kmh'), 'km/h = mph × 1.609344');
  });

  it('displays knots to kmh formula factor (1.852)', () => {
    assert.strictEqual(getFormula('knots', 'kmh'), 'km/h = knots × 1.852');
  });
});

describe('GPS Engine Conversions (lib/gps-engine.ts)', () => {
  it('converts exact 1 knot in m/s to 1 knot', () => {
    const oneKnotInMs = 1.852 / 3.6;
    const result = convertSpeed(oneKnotInMs, 'knots');
    assert.strictEqual(Number(result.toFixed(6)), 1);
  });

  it('converts 10 m/s to 36 km/h', () => {
    assert.strictEqual(convertSpeed(10, 'kmh'), 36);
  });

  it('converts 10 m/s to mph using exact constant (3.6 / 1.609344)', () => {
    const expected = 10 * (3.6 / 1.609344);
    assert.strictEqual(Number(convertSpeed(10, 'mph').toFixed(6)), Number(expected.toFixed(6)));
  });
});

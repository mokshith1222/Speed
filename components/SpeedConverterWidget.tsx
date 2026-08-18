'use client';

import { useState, useCallback } from 'react';
import { type ConversionUnit, UNITS, convert, formatConversion } from '@/lib/conversion-engine';

export default function SpeedConverterWidget({
  defaultFrom = 'kmh',
  defaultTo = 'mph',
}: {
  defaultFrom?: ConversionUnit;
  defaultTo?: ConversionUnit;
}) {
  const [fromUnit, setFromUnit] = useState<ConversionUnit>(defaultFrom);
  const [toUnit, setToUnit] = useState<ConversionUnit>(defaultTo);
  const [inputValue, setInputValue] = useState('100');
  const [copied, setCopied] = useState(false);

  const numericValue = parseFloat(inputValue) || 0;
  const result = convert(numericValue, fromUnit, toUnit);

  const handleSwap = useCallback(() => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setInputValue(formatConversion(result, 4));
  }, [fromUnit, toUnit, result]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(formatConversion(result, 6));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  }, [result]);

  const unitOptions = Object.values(UNITS);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}
      >
        {/* From */}
        <div className="mb-4">
          <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
            From
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-lg font-semibold tabular-nums bg-transparent border focus:outline-none focus:ring-2"
              style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-geist-mono)',
              }}
              aria-label="Speed value to convert"
              inputMode="decimal"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as ConversionUnit)}
              className="px-4 py-3 rounded-xl font-semibold text-sm border cursor-pointer bg-transparent focus:outline-none focus:ring-2"
              style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
              }}
              aria-label="From unit"
            >
              {unitOptions.map((u) => (
                <option key={u.id} value={u.id} style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                  {u.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center my-3">
          <button
            onClick={handleSwap}
            className="p-2 rounded-full transition-colors cursor-pointer"
            style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
            aria-label="Swap units"
            title="Swap units"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        {/* To */}
        <div className="mb-6">
          <label className="block text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
            To
          </label>
          <div className="flex gap-3">
            <div
              className="flex-1 px-4 py-3 rounded-xl text-lg font-semibold tabular-nums border"
              style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--brand-primary)',
                backgroundColor: 'rgba(0,212,170,0.05)',
                fontFamily: 'var(--font-geist-mono)',
              }}
              aria-live="polite"
            >
              {formatConversion(result, 4)}
            </div>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as ConversionUnit)}
              className="px-4 py-3 rounded-xl font-semibold text-sm border cursor-pointer bg-transparent focus:outline-none focus:ring-2"
              style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
              }}
              aria-label="To unit"
            >
              {unitOptions.map((u) => (
                <option key={u.id} value={u.id} style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                  {u.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="w-full py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          style={{
            backgroundColor: copied ? 'rgba(16,185,129,0.1)' : 'var(--bg-tertiary)',
            color: copied ? 'var(--status-success)' : 'var(--text-secondary)',
          }}
        >
          {copied ? '✓ Copied!' : 'Copy Result'}
        </button>
      </div>
    </div>
  );
}

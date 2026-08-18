'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { href: '/speedometer', label: 'Speedometer' },
  { href: '/speed-converter', label: 'Converter' },
  { href: '/guides', label: 'Guides' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        borderColor: 'var(--border-primary)',
        backgroundColor: theme === 'dark' ? 'rgba(11,15,26,0.85)' : 'rgba(255,255,255,0.85)',
      }}
      role="banner"
    >
      <div className="container-main flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-lg tracking-tight no-underline"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Speedometer — Home"
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="15" stroke="var(--brand-primary)" strokeWidth="2" />
            <circle cx="16" cy="16" r="11" stroke="var(--brand-primary)" strokeWidth="1" opacity="0.3" />
            <line
              x1="16" y1="16" x2="16" y2="6"
              stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round"
              transform="rotate(45, 16, 16)"
            />
            <circle cx="16" cy="16" r="2.5" fill="var(--brand-primary)" />
          </svg>
          <span>Speedometer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline"
                style={{
                  color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive
                    ? theme === 'dark' ? 'rgba(0,212,170,0.1)' : 'rgba(0,212,170,0.08)'
                    : 'transparent',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors cursor-pointer"
            style={{
              color: 'var(--text-secondary)',
              backgroundColor: 'transparent',
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors cursor-pointer"
            style={{ color: 'var(--text-secondary)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t py-3 px-4"
          style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline"
                style={{
                  color: isActive ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive
                    ? theme === 'dark' ? 'rgba(0,212,170,0.1)' : 'rgba(0,212,170,0.08)'
                    : 'transparent',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

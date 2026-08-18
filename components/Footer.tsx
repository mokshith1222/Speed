import Link from 'next/link';

const FOOTER_SECTIONS = [
  {
    title: 'Tools',
    links: [
      { href: '/speedometer', label: 'GPS Speedometer' },
      { href: '/speed-converter', label: 'Speed Converter' },
      { href: '/speed-converter/kmh-to-mph', label: 'km/h to mph' },
      { href: '/speed-converter/mph-to-kmh', label: 'mph to km/h' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { href: '/guides/how-gps-speed-works', label: 'How GPS Speed Works' },
      { href: '/guides/gps-speed-vs-car-speedometer', label: 'GPS vs Car Speedometer' },
      { href: '/guides/how-accurate-is-gps-speed', label: 'GPS Speed Accuracy' },
      { href: '/guides/phone-as-speedometer', label: 'Phone as Speedometer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Use' },
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t"
      style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
      role="contentinfo"
    >
      <div className="container-main py-12 md:py-16">
        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors no-underline hover:underline"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--border-primary)' }}
        >
          <div className="flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="15" stroke="var(--brand-primary)" strokeWidth="2" />
              <circle cx="16" cy="16" r="2.5" fill="var(--brand-primary)" />
            </svg>
            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
              Speedometer
            </span>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            © {currentYear} Speedometer. GPS speed readings are estimates and should not replace vehicle instrumentation.
          </p>
        </div>
      </div>
    </footer>
  );
}

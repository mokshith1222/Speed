import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Answers to common questions about GPS speedometers, speed accuracy, speed conversion, and how to use our tools.',
  alternates: { canonical: '/faq' },
};

const FAQ_SECTIONS = [
  {
    title: 'GPS Speedometer',
    items: [
      { q: 'How does the GPS speedometer work?', a: 'Our speedometer uses your device\'s built-in GPS sensor to determine your position. By tracking how your position changes over time, it calculates your speed. The browser\'s Geolocation API provides this data, and all processing happens locally on your device.' },
      { q: 'How accurate is GPS speed?', a: 'In ideal conditions (clear sky, outdoors), GPS speed is typically accurate within ±1-2 km/h. Accuracy degrades in urban areas with tall buildings, tunnels, dense forests, or indoors. GPS speed is generally more accurate than a car\'s mechanical speedometer.' },
      { q: 'Does it work on all devices?', a: 'It works on any modern device with GPS and a web browser — smartphones, tablets, and laptops with location services. Android Chrome and iOS Safari are both supported. Desktop computers without GPS will not be able to measure speed.' },
      { q: 'Does it need internet?', a: 'Internet is needed to load the page initially. Once loaded, speed measurement uses GPS satellites directly — not your internet connection. However, the page must remain open in your browser.' },
      { q: 'Why does it show 0 speed?', a: 'This usually means: (1) you haven\'t granted location permission, (2) you\'re not moving, (3) the GPS hasn\'t locked on yet (wait 10-30 seconds outdoors), or (4) you\'re indoors with poor satellite visibility.' },
      { q: 'Does it work in background?', a: 'No. Browser-based GPS tracking requires the page to be visible and active. If you switch tabs or lock your screen, tracking will pause. This is a browser security limitation, not a bug.' },
      { q: 'Will it drain my battery?', a: 'GPS usage does consume more battery than normal browsing. For long trips, we recommend keeping your device plugged in. Our implementation uses efficient polling to minimize battery impact.' },
    ],
  },
  {
    title: 'Speed Units & Conversion',
    items: [
      { q: 'What\'s the difference between km/h and mph?', a: 'km/h (kilometers per hour) is the standard speed unit in most countries. mph (miles per hour) is used in the US, UK, and a few other countries. 1 mph = 1.60934 km/h.' },
      { q: 'What is a knot?', a: 'A knot is a nautical speed unit equal to one nautical mile per hour (1.852 km/h). It\'s the standard unit in maritime navigation and aviation.' },
      { q: 'What is m/s used for?', a: 'm/s (meters per second) is the SI base unit for speed. It\'s commonly used in science, engineering, physics, and meteorology.' },
      { q: 'Are the conversions accurate?', a: 'Yes. Our converter uses standard mathematical conversion factors. For example: 1 km/h = 0.621371 mph, 1 knot = 1.852 km/h, 1 m/s = 3.6 km/h.' },
    ],
  },
  {
    title: 'Privacy & Safety',
    items: [
      { q: 'Is my location tracked?', a: 'No. All GPS processing happens locally in your browser. Your precise location is never sent to our servers or any third party. We don\'t store your coordinates.' },
      { q: 'Is it safe to use while driving?', a: 'Never interact with your device while driving. If using the speedometer in a vehicle, mount your device securely and have a passenger operate it, or check it only when safely stopped.' },
      { q: 'Can I trust the speed reading?', a: 'GPS speed is generally reliable but is an estimate. It should not replace legally required vehicle instrumentation. Environmental conditions, device quality, and satellite availability affect accuracy.' },
    ],
  },
];

export default function FAQPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
          Frequently Asked Questions
        </h1>
        <p className="text-base mb-10" style={{ color: 'var(--text-secondary)' }}>
          Common questions about our GPS speedometer, speed conversion tools, and how they work.
        </p>

        {FAQ_SECTIONS.map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border group"
                  style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-card)' }}
                >
                  <summary className="px-5 py-4 cursor-pointer text-sm font-medium list-none flex items-center justify-between" style={{ color: 'var(--text-primary)' }}>
                    {faq.q}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 ml-2 transition-transform group-open:rotate-180" style={{ color: 'var(--text-tertiary)' }}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        {/* Links */}
        <div className="mt-12 rounded-xl p-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Still have questions?</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}>
              Contact Us
            </Link>
            <Link href="/guides" className="px-4 py-2 rounded-lg text-sm font-medium no-underline" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
              Read Our Guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

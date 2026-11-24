import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Use Your Phone as a Speedometer',
  description:
    'Step-by-step guide to using your smartphone as a GPS speedometer. Learn the best apps, browser tools, and tips for accurate phone-based speed tracking.',
  alternates: { canonical: '/guides/phone-as-speedometer' },
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
          <span style={{ color: 'var(--text-secondary)' }}>Phone as Speedometer</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            How to Use Your Smartphone as a GPS Speedometer
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Every modern smartphone contains a multi-constellation satellite receiver. With a browser-based speedometer,
            you can instantly measure speed across driving, cycling, boating, or running without downloading any app.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Quick Summary Card */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Quick Setup
            </p>
            <p>
              Open our web-based GPS speedometer in Chrome (Android) or Safari (iOS), tap <strong>Start</strong>, and approve
              the browser&apos;s location prompt. Place your phone on a secure dashboard mount with an open view through the windshield.
              Speed, maximum velocity, and trip distance update in real time without transmitting your coordinates.
            </p>
          </div>

          {/* Section 1: Step-by-Step Instructions */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Step-by-Step Setup Guide
            </h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Open the Speedometer in Your Mobile Browser:</strong> Navigate to{' '}
                <Link href="/speedometer" className="font-medium underline" style={{ color: 'var(--brand-primary)' }}>
                  Speedometer
                </Link>{' '}
                using Chrome, Safari, Firefox, or Edge. No account creation or app store installation is required.
              </li>
              <li>
                <strong>Grant Precise Location Permission:</strong> When prompted, select &quot;While using the app&quot; and ensure
                &quot;Precise Location&quot; is toggled on. If previously denied, enable location in your browser site settings.
              </li>
              <li>
                <strong>Secure the Device in an Approved Mount:</strong> Mount your phone securely on your dashboard or air vent cradle
                before starting your journey. Never hold or manipulate a device while driving.
              </li>
              <li>
                <strong>Tap Start and Allow Ephemeris Lock:</strong> Press the prominent Start button. Allow 10 to 30 seconds outdoors
                for the GNSS receiver to lock onto strong satellite signals before accelerating.
              </li>
              <li>
                <strong>Select Your Preferred Unit:</strong> Toggle between km/h, mph, knots, or m/s according to your activity
                (road driving, maritime cruising, cycling, or athletics).
              </li>
            </ol>
          </section>

          {/* Section 2: Screen Wake Lock & Battery */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Screen Wake Lock &amp; Power Optimization
            </h2>
            <p className="mb-3">
              One challenge with using mobile browsers as vehicle instruments is the operating system&apos;s default screen timeout.
              Our web speedometer leverages the modern <strong>Screen Wake Lock API</strong>. When active, it automatically requests
              the operating system to keep your display illuminated while tracking, preventing annoying screen dimming.
            </p>
            <p className="mb-3">
              <strong>Battery &amp; Thermal Precautions:</strong> Continuous GNSS polling combined with an active display increases
              power draw and generates internal heat. For journeys longer than 20 minutes, connect your phone to an in-vehicle 12V charger.
            </p>
            <p>
              In hot weather, avoid mounting the device directly in direct midday sunlight against a baking windshield, as smartphone
              lithium-ion batteries will throttle performance or shut down safely when internal temperatures exceed 45&deg;C (113&deg;F).
            </p>
          </section>

          {/* Section 3: Browser vs Native App Comparison */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Web Browser Speedometer vs. Native App Store Download
            </h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Feature
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Web Browser Tool
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Native App Store App
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Installation & Storage', 'Instant; zero megabytes installed', 'Download required (20–100 MB)'],
                    ['Privacy & Tracking', 'Local processing; no telemetry sent', 'May bundle advertising/tracking SDKs'],
                    ['Velocity Accuracy', 'Direct hardware GPS (±0.5–1.5 km/h)', 'Direct hardware GPS (identical chipset)'],
                    ['Cross-Platform', 'Works on iOS, Android, and tablets', 'Platform-specific binary required'],
                    ['Screen Wake Support', 'Supported via W3C Wake Lock API', 'Native OS wake lock'],
                    ['Background Logging', 'Pauses when switching tabs (OS policy)', 'Can log in background if permitted'],
                  ].map(([feat, web, app], i) => (
                    <tr
                      key={feat}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>
                        {feat}
                      </td>
                      <td className="px-4 py-2.5">{web}</td>
                      <td className="px-4 py-2.5" style={{ color: 'var(--text-tertiary)' }}>
                        {app}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Practical Applications */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Popular Practical Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Secondary Vehicle Speedometer
                </h3>
                <p className="text-xs leading-relaxed">
                  Useful if your factory instrument cluster has failed, or if you drive an imported vehicle where the analog dial
                  displays in mph and you need a clear, digital km/h readout (or vice versa).
                </p>
              </div>
              <div
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Bicycle &amp; E-Bike Tracking
                </h3>
                <p className="text-xs leading-relaxed">
                  Mount your smartphone to handlebar brackets to monitor cruise speeds, average velocity, and total trip distance
                  without purchasing dedicated cycling computer hardware.
                </p>
              </div>
              <div
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Boating, Sailing &amp; Jet Skis
                </h3>
                <p className="text-xs leading-relaxed">
                  Switch the readout to knots for maritime navigation. Satellite GPS provides true speed over ground (SOG),
                  independent of water currents or paddlewheel fouling.
                </p>
              </div>
              <div
                className="rounded-xl p-4 border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Running, Walking &amp; Sprinting
                </h3>
                <p className="text-xs leading-relaxed">
                  Use meters per second (m/s) or km/h to measure running pacing, interval training, and top sprint speed during
                  outdoor track sessions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Safety and Legal Guidelines */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Safety and Hands-Free Legal Compliance
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Comply With Hands-Free Laws:</strong> In many jurisdictions, touching or holding a mobile phone while operating
                a motor vehicle is strictly prohibited by law. Set up your tracking session while parked.
              </li>
              <li>
                <strong>Unobstructed Driving View:</strong> Position your mount so it does not obstruct your view of traffic, mirrors,
                or roadway signage.
              </li>
              <li>
                <strong>GPS Is an Advisory Tool:</strong> Satellite speed is an informative reference tool and does not replace legally
                mandated, type-approved vehicle instrumentation.
              </li>
            </ul>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Ready to Turn Your Phone into a Speedometer?
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Launch our free tool, tap Start, and see your speed in real time.
            </p>
            <Link
              href="/speedometer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline"
              style={{ backgroundColor: 'var(--brand-primary)', color: '#000' }}
            >
              Open GPS Speedometer →
            </Link>
          </div>

          {/* Related Guides */}
          <div className="pt-6" style={{ borderTop: '1px solid var(--border-primary)' }}>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Related Guides
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/guides/how-accurate-is-gps-speed"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                GPS Speed Accuracy
              </Link>
              <Link
                href="/guides/gps-speed-vs-car-speedometer"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                GPS vs Car Speedometer
              </Link>
              <Link
                href="/guides/how-gps-speed-works"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                How GPS Speed Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GPS Speed vs Car Speedometer — Which Is More Accurate?',
  description:
    'Understand why GPS speed and your car speedometer show different values. Learn which is more accurate and why manufacturers calibrate speedometers to read high.',
  alternates: { canonical: '/guides/gps-speed-vs-car-speedometer' },
};

export default function GpsVsCarPage() {
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
          <span style={{ color: 'var(--text-secondary)' }}>GPS vs Car Speedometer</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-primary)' }}>
            Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            GPS Speed vs. Car Speedometer: Why They Differ &amp; Which to Trust
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            When driving with navigation or a mobile speedometer active, your vehicle dashboard and GPS reading will almost
            always display different numbers. Here is why that difference exists, how regulations govern dashboard displays,
            and which reading you should rely on.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {/* Quick Summary Card */}
          <div
            className="rounded-xl p-5"
            style={{ backgroundColor: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.15)' }}
          >
            <p className="font-semibold mb-1 text-sm" style={{ color: 'var(--brand-primary)' }}>
              Quick Answer
            </p>
            <p>
              In steady-state highway driving with good satellite visibility, <strong>satellite GPS speed is generally closer to your true ground velocity</strong> than
              your car&apos;s dashboard. Vehicle speedometers calculate speed from wheel rotation and are legally prohibited by regulations such as UN ECE Regulation 39
              from ever under-reporting your speed. Consequently, factory speedometers are engineered with a positive margin and typically indicate slightly higher than actual speed.
            </p>
          </div>

          {/* Section 1: Why the Difference Exists */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Two Completely Different Measurement Methods
            </h2>
            <p className="mb-3">
              The discrepancy between your dashboard and GPS occurs because the two systems measure completely different physical phenomena:
            </p>
            <div className="space-y-3">
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                  Your Vehicle Speedometer: Rotational Speed
                </h3>
                <p className="text-xs leading-relaxed">
                  Your car does not measure ground speed directly. Instead, sensors on the transmission shaft or wheel hubs measure rotational revolutions per minute (RPM).
                  The vehicle computer multiplies this RPM by the assumed rolling circumference of the factory tire. If tire tread wears down, tire pressure drops,
                  or aftermarket wheels are fitted, the true circumference shrinks, causing the wheel to rotate faster at any given road speed and artificially inflating the reading.
                </p>
              </div>
              <div
                className="p-4 rounded-xl border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
              >
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--brand-primary)' }}>
                  Your GPS Speedometer: Satellite Doppler Frequency Shift
                </h3>
                <p className="text-xs leading-relaxed">
                  GPS receivers measure your true ground displacement by tracking radio signals from orbiting GNSS satellites. Velocity is computed primarily through
                  the Doppler frequency shift of incoming microwave signals. GPS is completely unaffected by tire wear, pressure changes, or transmission gearing,
                  providing an objective measurement of ground velocity across Earth&apos;s surface.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Regulatory Framework */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              International Speedometer Regulations (UN ECE Regulation 39)
            </h2>
            <p className="mb-3">
              Automakers do not leave speedometer calibration to chance. In most global markets, passenger vehicles must comply with
              <strong>UN ECE Regulation 39</strong>. This standard sets two critical legal requirements:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-3">
              <li>
                <strong>Under-reporting is strictly forbidden:</strong> The speedometer must never indicate a speed lower than actual vehicle speed
                (<code>Indicated Speed &ge; Actual Speed</code>).
              </li>
              <li>
                <strong>Over-reporting is bounded:</strong> The indicated speed may exceed true speed by no more than 10% plus 4 km/h
                (<code>Indicated Speed &le; 1.1 &times; Actual Speed + 4 km/h</code>).
              </li>
            </ol>
            <p>
              Because tires naturally wear down over their lifespan (reducing diameter by ~13 mm between new tread and worn tread) and tire pressure can fluctuate,
              manufacturers intentionally calibrate production vehicle speedometers with a safety buffer above true speed to ensure that even with worst-case tire wear
              and high pressure, the car never unlawfully under-reports velocity.
            </p>
          </section>

          {/* Section 3: Grade and Elevation Differences */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Steep Hills &amp; Elevation: 2D vs. 3D Velocity
            </h2>
            <p className="mb-3">
              A subtle technical factor occurs on steep mountain roads. Vehicle wheels travel along the true hypotenuse of the road slope (3D surface distance).
              Many basic consumer GPS applications calculate speed as 2D horizontal displacement across latitude and longitude.
            </p>
            <p>
              However, mathematically, the difference is negligible for road vehicles. On a very steep 10% grade (an angle of roughly 5.7&deg;),
              the cosine factor is <code>cos(5.7&deg;) &approx; 0.995</code>. At 100 km/h along the slope, horizontal GPS speed would register approximately
              99.5 km/h — a variance of only 0.5 km/h, which is well within normal GPS receiver tolerances.
            </p>
          </section>

          {/* Section 4: Comparison Table */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Feature Comparison: Car Dashboard vs. Satellite GPS
            </h2>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-primary)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Factor
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Car Dashboard Speedometer
                    </th>
                    <th className="px-4 py-3 text-left font-semibold" style={{ color: 'var(--text-primary)' }}>
                      GPS Speedometer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Primary Sensor', 'Wheel/transmission pulse counter', 'Multi-GNSS satellite radio receiver'],
                    ['Typical Accuracy', 'Reads slightly high (regulatory buffer)', '±0.5 to ±1.5 km/h (open sky)'],
                    ['Tire Wear Dependency', 'Error increases as tread wears down', 'Completely unaffected by tires'],
                    ['Latency / Responsiveness', 'Instantaneous mechanical/electronic readout', 'Slight lag during rapid braking/acceleration (0.5–1s)'],
                    ['Tunnels & Garages', 'Continuous operation via wheel sensors', 'Loss of signal until exit'],
                    ['Legal Status', 'Officially recognized vehicle instrument', 'Informational & calibration reference'],
                  ].map(([fac, car, gps], i) => (
                    <tr
                      key={fac}
                      style={{
                        borderTop: '1px solid var(--border-primary)',
                        backgroundColor: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-medium" style={{ color: 'var(--text-primary)' }}>
                        {fac}
                      </td>
                      <td className="px-4 py-2.5">{car}</td>
                      <td className="px-4 py-2.5">{gps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Which Should You Trust */}
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Which Speed Reading Should You Follow?
            </h2>
            <p className="mb-3">
              The answer depends on whether your priority is <strong>legal speed limit compliance</strong> or <strong>objective velocity measurement</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>For Speed Enforcement &amp; Law Compliance:</strong> Always drive by your vehicle&apos;s dashboard speedometer.
                Because your dashboard indicates equal to or slightly above your true speed, obeying posted speed limits according to your
                dashboard provides an automatic built-in safety margin against speed cameras and radar traps.
              </li>
              <li>
                <strong>For True Ground Velocity &amp; Calibration:</strong> GPS provides the objective scientific reference. If your car dashboard
                reads 104 km/h on cruise control while GPS consistently registers 100 km/h on a level highway, you know your vehicle has an approximately
                4 km/h positive offset at that speed.
              </li>
            </ul>
          </section>

          {/* CTA Box */}
          <div className="rounded-xl p-6 text-center" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              Check Your Speedometer Offset Live
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Launch our free online GPS speedometer to monitor your true ground speed on your next journey.
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
                href="/guides/speedometer-accuracy"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                Speedometer Accuracy
              </Link>
              <Link
                href="/guides/how-accurate-is-gps-speed"
                className="px-4 py-2 rounded-lg text-sm font-medium no-underline"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              >
                GPS Speed Accuracy
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

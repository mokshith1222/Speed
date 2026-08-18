import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'GPS speedometer accuracy disclaimer — important information about the limitations of GPS-based speed measurement.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>Disclaimer</h1>
        <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <p className="font-semibold mb-2" style={{ color: 'var(--status-warning)' }}>Important Notice</p>
            <p>The GPS speedometer on this website provides <strong>estimated speed readings</strong> based on GPS satellite positioning. These readings are not guaranteed to be accurate and should not be used as a substitute for legally required vehicle instrumentation.</p>
          </div>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>GPS Accuracy</h2>
          <p>GPS speed accuracy depends on many factors including satellite visibility, atmospheric conditions, device hardware quality, multi-path interference (signal bouncing off buildings), and the GPS chipset in your device. Typical accuracy is ±1-2 km/h in ideal conditions, but may be significantly worse in urban canyons, tunnels, dense forests, or indoors.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Not a Legal Instrument</h2>
          <p>This GPS speedometer is not calibrated, certified, or approved as a legal speed measurement device in any jurisdiction. It should not be used to verify compliance with speed limits or for any legal purpose.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Safety</h2>
          <p>Never interact with your phone or device while driving. If using this tool in a vehicle, ensure the device is securely mounted and operated by a passenger, or check it only when safely stopped. Always follow local traffic laws.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Speed Conversions</h2>
          <p>Speed conversion calculations on this website use standard mathematical conversion factors and are accurate to the precision displayed. However, we cannot guarantee freedom from software errors. For critical calculations, please verify results independently.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Content</h2>
          <p>Educational content on this website is provided for informational purposes only and should not be considered professional advice. While we strive for accuracy, information may become outdated or contain errors.</p>
        </div>
      </div>
    </section>
  );
}

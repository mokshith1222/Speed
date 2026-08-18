import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Speedometer — usage conditions for our GPS speedometer and speed tools.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>Terms of Use</h1>
        <p className="text-xs mb-8" style={{ color: 'var(--text-tertiary)' }}>Last updated: August 2026</p>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>1. Acceptance</h2>
          <p>By using Speedometer (&quot;the Website&quot;), you agree to these Terms of Use. If you do not agree, please do not use the Website.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>2. Service Description</h2>
          <p>Speedometer provides free online speed measurement tools, speed unit conversion tools, and educational content about speed measurement. All tools are provided &quot;as is&quot; for informational and convenience purposes.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>3. GPS Speed Disclaimer</h2>
          <p>GPS speed readings provided by this Website are <strong>estimates</strong> based on satellite positioning technology. They are subject to inaccuracies caused by environmental conditions, device hardware, satellite availability, and other factors. GPS speed readings from this Website:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Should <strong>not</strong> be used as a replacement for legally required vehicle instrumentation</li>
            <li>Are <strong>not</strong> legally certified or calibrated</li>
            <li>May differ from your vehicle&apos;s speedometer readings</li>
            <li>Should not be relied upon for any purpose where accuracy is legally required</li>
          </ul>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>4. Safety</h2>
          <p>Do not interact with your device while driving or operating a vehicle. Mount your device securely if using the speedometer while traveling. Always comply with local traffic laws and speed limits. We are not responsible for any accidents, injuries, or damages arising from device use while traveling.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>5. Intellectual Property</h2>
          <p>All content, design, code, and materials on this Website are owned by Speedometer. You may not copy, redistribute, or republish our content without permission.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>6. Limitation of Liability</h2>
          <p>This Website is provided &quot;as is&quot; without warranties of any kind. We are not liable for any damages arising from the use of our tools or content, including but not limited to inaccurate speed readings, data loss, or device damage.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>7. Changes</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the Website constitutes acceptance of updated Terms.</p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Speedometer team. Questions, feedback, or partnership inquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>Contact</h1>
        <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          <p>We welcome your questions, feedback, and suggestions about Speedometer and our tools.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>How to Reach Us</h2>
          <p>
            Email: <a href="mailto:contact@speedometer.tools" className="underline" style={{ color: 'var(--brand-primary)' }}>contact@speedometer.tools</a>
          </p>
          <p>We aim to respond to inquiries within 2–3 business days.</p>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>What We Can Help With</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Questions about how our GPS speedometer works</li>
            <li>Bug reports or technical issues</li>
            <li>Feedback and feature suggestions</li>
            <li>Privacy and data inquiries</li>
            <li>Partnership or collaboration inquiries</li>
          </ul>
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Bug Reports</h2>
          <p>If you encounter a technical issue, please include: your device type, browser, operating system, and a description of the problem. This helps us investigate and fix issues faster.</p>
        </div>
      </div>
    </section>
  );
}

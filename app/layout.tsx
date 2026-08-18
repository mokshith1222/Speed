import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#00d4aa',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://speedometer.tools'),
  title: {
    default: 'Speedometer — Free Online GPS Speed Tracker & Tools',
    template: '%s | Speedometer',
  },
  description:
    'Free online GPS speedometer to measure your real-time speed in km/h, mph, knots, and m/s. Speed converter, guides, and tools — no download required.',
  keywords: [
    'online speedometer',
    'GPS speedometer',
    'speed tracker',
    'speedometer online',
    'digital speedometer',
    'km/h to mph',
    'speed converter',
    'GPS speed',
  ],
  authors: [{ name: 'Speedometer' }],
  creator: 'Speedometer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Speedometer',
    title: 'Speedometer — Free Online GPS Speed Tracker & Tools',
    description:
      'Free online GPS speedometer to measure your real-time speed in km/h, mph, knots, and m/s. No download required.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speedometer — Free Online GPS Speed Tracker & Tools',
    description:
      'Free online GPS speedometer to measure your real-time speed. No download required.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlefbfa23743896d7f7',
    other: {
      'google-site-verification': 'googlefbfa23743896d7f7.html',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

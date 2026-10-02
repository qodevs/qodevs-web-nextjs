import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qodevs.com'),
  title: {
    default: "QODEVS | Medical Software Engineering & DiGA",
    template: "%s | QODEVS"
  },
  description: "Certified medical software engineering for MDR Class I/IIa and DiGA fast-track. We architect, certify, and scale compliant digital health applications.",
  keywords: ["Medical Software", "DiGA", "MDR Compliance", "IEC 62304", "ISO 13485", "Digital Health", "SaMD", "Healthcare IT", "Health App Development"],
  authors: [{ name: "QODEVS GmbH" }],
  creator: "QODEVS",
  openGraph: {
    type: "website",
    locale: "en_EU",
    url: "https://qodevs.com",
    title: "QODEVS | Medical Software Engineering & DiGA",
    description: "Certified medical software engineering for MDR Class I/IIa and DiGA fast-track.",
    siteName: "QODEVS",
    images: [{
      url: "/logo-final.png",
      width: 1200,
      height: 630,
      alt: "QODEVS Medical Software Engineering",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QODEVS | Medical Software Engineering & DiGA",
    description: "Certified medical software engineering for MDR Class I/IIa and DiGA fast-track.",
    images: ["/logo-final.png"],
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
};

import { getDictionary } from "@/dictionaries";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }];
}

export default async function RootLayout(
  props: { children: React.ReactNode, params: Promise<{ lang: string }> }
) {
  const params = await props.params;
  const { lang } = params;
  const { children } = props;
  const dict = await getDictionary(lang as 'en' | 'de');
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
                                          try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <Navbar lang={lang} dict={dict.nav} />
        <div className="flex-1 w-full">
          {children}
        </div>
        <Footer lang={lang} />

        {/* Floating Mobile Contact Button */}
        <Link href="/contact" className="md:hidden fixed bottom-6 right-6 z-50 bg-primary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-white text-[24px]">chat</span>
        </Link>
      </body>
    </html>
  );
}

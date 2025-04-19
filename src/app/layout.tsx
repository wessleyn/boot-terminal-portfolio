import BaguetteBox from '@/_components/BaguetteBox';
import ChartWrapper from '@/_components/ChartWrapper';
import ThemeToggleScript from '@/_components/ThemeToggleScript';
import type { Metadata } from "next";
import { Azeret_Mono } from 'next/font/google';
import ThemeToggle from "../_components/ThemeToggle";
import Footer from "./(portfolio)/_components/Footer";
import "./globals.css";

// Configure Azeret Mono font
const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-azeret-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://wessleyn.me'),
  title: "Wessley's - Terminal Portfolio - Wessley Nyakanyanga",
  description: "Software Developer Portfolio showcasing projects and skills in a terminal-themed interface",
  keywords: "software developer, portfolio, programming, coding, terminal, developer",
  authors: [{ name: "Wessley Nyakanyanga" }],
  openGraph: {
    title: "Wessley Nyakanyanga - Software Developer Portfolio",
    description: "Terminal-themed portfolio showcasing projects and skills",
    images: ["/assets/img/profile.png"],
    url: "https://wessleyn.me",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-bs-theme="dark" lang="en" className={azeretMono.variable}>
      <head>
        <link rel="canonical" href="https://wessleyn.me" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeToggle />
        {children}
        <Footer />

        {/* Replace scripts with React components */}
        <ChartWrapper />
        <BaguetteBox />
        <ThemeToggleScript />
      </body>
    </html>
  );
}

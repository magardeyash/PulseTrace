import type { Metadata } from "next";
// Removed next/font/google imports due to network fetch errors during build
import "./globals.css";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { CsrfInit } from "@/components/dashboard/shared/CsrfInit";
import { NetworkStatus } from "@/components/ui/NetworkStatus";

export const metadata: Metadata = {
  title: {
    template: '%s | PulseTrace',
    default: 'PulseTrace - Real-Time Incident Intelligence',
  },
  description: "Mission-critical incident response & telemetry platform powered by Gemini AI. Catch errors instantly, automate root-cause diagnosis, and enforce organizational SLA standards in real-time.",
  manifest: "/manifest.json",
  authors: [{ name: "PulseTrace Core Team" }],
  openGraph: {
    title: 'PulseTrace - Real-Time Incident Intelligence',
    description: 'Enterprise-grade incident tracking and telemetry platform powered by Gemini AI.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://pulsetrace.io',
    siteName: 'PulseTrace',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulseTrace - Incident Intelligence',
    description: 'Enterprise-grade incident tracking and telemetry platform powered by Gemini AI.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-glow-spotlight">
        <CsrfInit />
        <NetworkStatus />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}

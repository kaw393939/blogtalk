import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Keith Williams — AI, Education & Building Things",
    template: "%s — Keith Williams",
  },
  description: "Writing by Keith Williams on AI, education, vibe coding, and the future of work.",
  metadataBase: new URL("https://kaw393939.github.io/blogtalk"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keith Williams",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded">
          Skip to content
        </a>
        <header role="banner" className="border-b border-[var(--border)]">
          <nav aria-label="Main" className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors">
              Keith Williams
            </Link>
            <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              Writing
            </Link>
          </nav>
        </header>
        <main id="main" role="main" className="flex-1 max-w-2xl mx-auto px-5 py-10 sm:py-12 w-full">
          {children}
        </main>
        <footer role="contentinfo" className="border-t border-[var(--border)]">
          <div className="max-w-2xl mx-auto px-5 py-6 text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Keith Williams
          </div>
        </footer>
      </body>
    </html>
  );
}

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
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#111" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Keith Williams",
    template: "%s — Keith Williams",
  },
  description:
    "Writing on AI, education, and building things.",
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
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--link)] focus:text-white focus:rounded"
        >
          Skip to content
        </a>

        <header className="border-b border-[var(--border)]">
          <nav aria-label="Main" className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold tracking-tight text-[var(--fg)] hover:text-[var(--link)] transition-colors"
            >
              Keith Williams
            </Link>
            <Link
              href="/blog"
              className="text-sm text-[var(--gray)] hover:text-[var(--fg)] transition-colors"
            >
              Writing
            </Link>
          </nav>
        </header>

        <main id="main" className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
          {children}
        </main>

        <footer className="border-t border-[var(--border)]">
          <div className="max-w-2xl mx-auto px-6 py-6 text-xs text-[var(--light)]">
            &copy; {new Date().getFullYear()} Keith Williams
          </div>
        </footer>
      </body>
    </html>
  );
}

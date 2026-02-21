import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keith Williams — AI, Education & Building Things",
  description: "Writing by Keith Williams on AI, education, vibe coding, and the future of work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <header className="border-b border-[var(--border)]">
          <nav className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
            <a href="/blogtalk" className="font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors">
              Keith Williams
            </a>
            <a href="/blogtalk/blog" className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
              Writing
            </a>
          </nav>
        </header>
        <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]">
          <div className="max-w-2xl mx-auto px-6 py-6 text-xs text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Keith Williams
          </div>
        </footer>
      </body>
    </html>
  );
}

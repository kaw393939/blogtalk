import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlogTalk — Thoughts on Technology, Design & Ideas",
  description: "A personal blog exploring the intersections of technology, philosophy, and creative thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/blogtalk" className="group flex items-center gap-2">
              <span className="text-lg font-extrabold tracking-tight text-[var(--accent)]">
                BT
              </span>
              <span className="text-lg font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors">
                BlogTalk
              </span>
            </a>
            <div className="flex items-center gap-8 text-sm font-medium">
              <a href="/blogtalk" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Home
              </a>
              <a href="/blogtalk/blog" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                Essays
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]">
          <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <span>&copy; {new Date().getFullYear()} BlogTalk</span>
            <span className="text-xs">Crafted with Next.js &middot; Deployed on GitHub Pages</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

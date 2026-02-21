import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlogTalk",
  description: "A personal blog powered by Next.js and Markdown",
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
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/blogtalk" className="text-xl font-bold tracking-tight hover:text-[var(--accent)] transition-colors">
              BlogTalk
            </a>
            <div className="flex gap-6 text-sm">
              <a href="/blogtalk" className="hover:text-[var(--accent)] transition-colors">
                Home
              </a>
              <a href="/blogtalk/blog" className="hover:text-[var(--accent)] transition-colors">
                Blog
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1 max-w-3xl mx-auto px-6 py-12 w-full">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-6 py-6 text-center text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} BlogTalk. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}

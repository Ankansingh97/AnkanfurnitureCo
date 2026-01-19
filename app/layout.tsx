import type { Metadata } from "next";
import type React from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniture Co - Custom Sofas",
  description: "Handcrafted sofas, gallery, and online orders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </head>
      <body>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-br from-[#4b5d2a] via-[#2c3e70] to-[#0c1a4d]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-white">
              Ankan's Furniture Co.
            </Link>
            <nav className="flex gap-6 text-sm text-white/80">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/showcase" className="transition hover:text-white">
                Showcase
              </Link>
              <Link href="/orders" className="transition hover:text-white">
                Order
              </Link>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <Link href="/dashboard" className="transition hover:text-white">
                Dashboard
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="border-t border-white/10 bg-gradient-to-br from-[#0c1a4d] via-[#2c3e70] to-[#4b5d2a] text-white/80">
          <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="font-semibold text-white">Furniture Co.</h3>
                <p className="mt-2 text-sm">
                  Handcrafted sofas built for comfort and style.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Shop</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <Link
                      href="/showcase"
                      className="transition hover:text-white"
                    >
                      All sofas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/orders"
                      className="transition hover:text-white"
                    >
                      Custom order
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Learn</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <Link href="/blog" className="transition hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/care-and-maintenance"
                      className="transition hover:text-white"
                    >
                      Care guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Contact</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>hello@furniturego.com</li>
                  <li>+1 (555) 000-0000</li>
                  <li className="mt-3">
                    <Link href="/dashboard" className="text-xs font-medium">
                      Admin dashboard
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm">
              <p>&copy; 2025 Furniture Co. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

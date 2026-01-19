import Link from "next/link";
import type React from "react";

export const metadata = {
  title: "Sofa Blog",
  description: "Guides, care, materials, and design tips for sofas.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = ["Care", "Design", "Materials", "Guides"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <header className="border-b pb-6">
        <h1 className="text-3xl font-bold">Sofa Blog</h1>
        <p className="mt-1 text-muted-foreground">
          Learn how to choose, style, and care for your sofa.
        </p>
        <nav className="mt-4 flex flex-wrap items-center gap-3">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/blog?category=${encodeURIComponent(c.toLowerCase())}`}
              className="rounded-md border px-3 py-1 text-sm"
            >
              {c}
            </Link>
          ))}
          <div className="ms-auto">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-56 rounded-md border px-3 py-1.5 text-sm"
            />
          </div>
        </nav>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <main>{children}</main>
        <aside className="space-y-6">
          <section className="rounded-lg border p-4">
            <h3 className="font-medium">About</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We craft sofas with premium materials and ergonomic design. Read
              our guides to make the best choice for your space.
            </p>
          </section>

          <section className="rounded-lg border p-4">
            <h3 className="font-medium">Featured posts</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/blog/sofa-fabrics-explained" className="underline">
                  Sofa fabrics explained
                </Link>
              </li>
              <li>
                <Link href="/blog/care-and-maintenance" className="underline">
                  Care and maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-choose-the-right-sofa-size"
                  className="underline"
                >
                  Choose the right size
                </Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

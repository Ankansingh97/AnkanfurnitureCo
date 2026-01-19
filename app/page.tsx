import Link from "next/link";
import Image from "next/image";
import sofa from "../images/sofa1.png";
import sofa1 from "../images/download (1).jpg";
import sofa2 from "../images/download (2).jpg";
import sofa3 from "../images/download (3).jpg";
// import sofa5 from "../images/sofa2.png";

const categories = [
  {
    title: "Modern",
    desc: "Clean lines, low profiles, bold fabrics.",
    image: sofa,
  },
  {
    title: "Classic",
    desc: "Rolled arms, tufting, timeless silhouettes.",
    image: sofa2,
  },
  {
    title: "Sectionals",
    desc: "Family-ready, modular, deep seating.",
    image: sofa3,
  },
];

const featured = [
  {
    title: "Oslo Modular",
    desc: "Performance linen, oak base",
    price: "$2,450",
    image: sofa,
  },
  {
    title: "Marin Deep Seat",
    desc: "Feather wrap, kiln-dried maple",
    price: "$2,980",
    image: sofa1,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b5d2a] via-[#2c3e70] to-[#0c1a4d] text-white">
      <main className="mx-auto max-w-7xl px-4 py-14 space-y-16">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium ring-1 ring-white/20">
              Handcrafted sofas • Made to order
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Sofas crafted for comfort. Built to last.
            </h1>
            <p className="text-white/80">
              Premium materials, ergonomic support, and bespoke finishes. Order
              your custom piece or explore our latest showcase.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/orders"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0c1a4d] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-black/30"
              >
                Order a custom sofa
              </Link>
              <Link
                href="/showcase"
                className="rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                View showcase
              </Link>
              <Link
                href="/blog"
                className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Sofa blog
              </Link>
            </div>
            <div className="flex gap-6 text-sm text-white/80">
              <div>
                <div className="text-2xl font-semibold text-white">4.9★</div>
                Trusted by 1,200+ homes
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">12 yrs</div>
                Craftsmanship experience
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="group relative h-48 overflow-hidden rounded-2xl bg-white/10 backdrop-blur">
              <Image
                src={sofa}
                alt="Sofa"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="group relative h-48 overflow-hidden rounded-2xl bg-white/10 backdrop-blur">
              <Image
                src={sofa2}
                alt="Sofa detail"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="group relative h-48 overflow-hidden rounded-2xl bg-white/10 backdrop-blur sm:col-span-2">
              <Image
                src={sofa2}
                alt="Living room setup"
                fill
                sizes="(min-width: 640px) 100vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </div>
        </section>

        {/* Featured categories */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured categories</h2>
            <Link
              href="/showcase"
              className="text-sm text-white/80 underline underline-offset-4"
            >
              View all
            </Link>
          </div>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={`/showcase?category=${c.title.toLowerCase()}`}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-white/25"
              >
                <div className="group relative mb-4 h-40 overflow-hidden rounded-xl bg-white/10">
                  <Image
                    src={c.image}
                    alt={`${c.title} sofa`}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <h3 className="text-lg font-medium">{c.title}</h3>
                <p className="text-sm text-white/80">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured products */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured sofas</h2>
            <Link
              href="/showcase"
              className="text-sm text-white/80 underline underline-offset-4"
            >
              See all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.title}
                href={`/showcase/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-white/25"
              >
                <div className="group relative mb-4 h-44 overflow-hidden rounded-xl bg-white/10">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="text-sm text-white/75">{p.desc}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                    {p.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How we build your sofa</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consult",
                desc: "Layout, sizing, fabrics, timelines.",
              },
              {
                step: "02",
                title: "Design",
                desc: "3D mockups, approvals, refinements.",
              },
              {
                step: "03",
                title: "Craft",
                desc: "Hand-built frames, precision joinery.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "White-glove delivery and setup.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-sm shadow-black/10"
              >
                <div className="text-xs font-semibold text-white/70">
                  Step {s.step}
                </div>
                <div className="mt-1 text-lg font-semibold">{s.title}</div>
                <p className="text-sm text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Clients love our comfort</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Ava M.",
                quote:
                  "The depth and support are perfect. Fabric still looks new after a year.",
              },
              {
                name: "Daniel K.",
                quote:
                  "Custom sectional fit our tricky corner—delivery and setup were flawless.",
              },
              {
                name: "Priya S.",
                quote:
                  "Quality frame, plush cushions, and they hit our exact color match.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-white/15 bg-white/5 p-4 shadow-sm shadow-black/10"
              >
                <p className="text-sm text-white/80">"{t.quote}"</p>
                <div className="mt-3 text-sm font-semibold text-white">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl shadow-black/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Ready to design your next sofa?
              </h3>
              <p className="text-sm text-white/80">
                Get a quote, pick fabrics, and schedule delivery dates that work
                for you.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/orders"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0c1a4d] shadow-md shadow-black/20 hover:-translate-y-0.5"
              >
                Start a quote
              </Link>
              <Link
                href="/blog"
                className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Sofa blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

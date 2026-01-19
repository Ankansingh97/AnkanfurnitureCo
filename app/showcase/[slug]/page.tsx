import { notFound } from "next/navigation";
import Link from "next/link";

const products = [
  { slug: "oslo-modular", title: "Oslo Modular", price: "$2,450" },
  { slug: "marin-deep-seat", title: "Marin Deep Seat", price: "$2,980" },
  { slug: "porter-track-arm", title: "Porter Track Arm", price: "$2,250" },
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b5d2a] via-[#2c3e70] to-[#0c1a4d] text-white">
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        <Link
          href="/showcase"
          className="text-sm text-white/70 hover:text-white"
        >
          ← Back to collection
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 flex items-center justify-center">
            {/* Product image placeholder */}
            <div className="w-full h-[420px] flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 rounded-lg">
              <div className="text-center space-y-2">
                <div className="text-6xl">🛋️</div>
                <p className="text-white/60 text-sm">{product.title}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="text-lg text-white/80">{product.price}</div>
            <p className="text-white/80">
              Handcrafted frame, premium cushions, and customizable fabrics.
            </p>
            <div className="flex gap-3">
              <Link
                href={`/orders?product=${product.slug}`}
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0c1a4d]"
              >
                Order this sofa
              </Link>
              <Link
                href="/orders"
                className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Start custom
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

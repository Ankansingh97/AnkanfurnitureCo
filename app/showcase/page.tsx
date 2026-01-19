import Link from "next/link";
import Image from "next/image";
import sofa from "../../images/sofa1.png";
import sofa1 from "../../images/download (1).jpg";
import sofa2 from "../../images/download (2).jpg";
import sofa3 from "../../images/download (3).jpg";

const allProducts = [
  {
    id: 1,
    title: "Oslo Modular",
    category: "modern",
    price: "$2,450",
    image: sofa,
  },
  {
    id: 2,
    title: "Marin Deep Seat",
    category: "classic",
    price: "$2,980",
    image: sofa1,
  },
  {
    id: 3,
    title: "Porter Track Arm",
    category: "modern",
    price: "$2,250",
    image: sofa2,
  },
  {
    id: 4,
    title: "Sedona Sectional",
    category: "sectionals",
    price: "$3,500",
    image: sofa3,
  },
  {
    id: 5,
    title: "Vienna Lounge",
    category: "classic",
    price: "$2,750",
    image: sofa,
  },
  {
    id: 6,
    title: "Milan L-Shape",
    category: "sectionals",
    price: "$3,200",
    image: sofa1,
  },
  {
    id: 7,
    title: "Aspen Sleeper",
    category: "modern",
    price: "$2,600",
    image: sofa2,
  },
  {
    id: 8,
    title: "Brooklyn Vintage",
    category: "classic",
    price: "$2,900",
    image: sofa3,
  },
  {
    id: 9,
    title: "Phoenix Modular",
    category: "sectionals",
    price: "$3,800",
    image: sofa,
  },
];

export default function ShowcasePage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category;
  const filtered = category
    ? allProducts.filter((p) => p.category === category)
    : allProducts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b5d2a] via-[#2c3e70] to-[#0c1a4d] text-white">
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← Back home
          </Link>
          <h1 className="mt-4 text-3xl font-bold">Our sofa collection</h1>
          <p className="mt-2 text-white/80">
            Explore all our designs and custom options.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <Link
            href="/showcase"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              !category
                ? "bg-white text-[#0c1a4d]"
                : "border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            All
          </Link>
          {["modern", "classic", "sectionals"].map((cat) => (
            <Link
              key={cat}
              href={`/showcase?category=${cat}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition capitalize ${
                category === cat
                  ? "bg-white text-[#0c1a4d]"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/showcase/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-white/25"
            >
              <div className="group relative mb-4 h-48 overflow-hidden rounded-xl bg-white/10">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  {p.price}
                </span>
              </div>
              <p className="mt-2 text-sm capitalize text-white/75">
                {p.category}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

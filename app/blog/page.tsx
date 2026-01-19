import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

const posts: Post[] = [
  {
    slug: "how-to-choose-the-right-sofa-size",
    title: "How to choose the right sofa size",
    excerpt:
      "Measure your room, plan traffic flow, and pick a depth that matches your posture.",
    category: "Guides",
    date: "2025-01-10",
  },
  {
    slug: "sofa-fabrics-explained",
    title: "Sofa fabrics explained",
    excerpt:
      "From performance weaves to natural fibers—pros, cons, and when to use each.",
    category: "Materials",
    date: "2025-01-05",
  },
  {
    slug: "care-and-maintenance",
    title: "Care and maintenance",
    excerpt:
      "Vacuum schedules, stain removal, and cushion rotation to extend lifespan.",
    category: "Care",
    date: "2025-01-01",
  },
];

export default function BlogIndex() {
  return (
    <div className="space-y-6">
      {posts.map((p) => (
        <article
          key={p.slug}
          className="rounded-lg border p-5 hover:bg-muted/40"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{p.category}</span>
            <span>•</span>
            <time dateTime={p.date}>
              {new Date(p.date).toLocaleDateString()}
            </time>
          </div>
          <h2 className="mt-2 text-xl font-semibold">
            <Link href={`/blog/${p.slug}`} className="underline">
              {p.title}
            </Link>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

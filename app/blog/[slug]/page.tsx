import { notFound } from "next/navigation";

const posts = [
  {
    slug: "how-to-choose-the-right-sofa-size",
    title: "How to choose the right sofa size",
    body: `
      Picking the correct sofa size starts with accurate room measurements...
      1) Measure wall-to-wall and main pathways
      2) Choose seat depth based on posture
      3) Test layout with painter's tape
    `,
  },
  {
    slug: "sofa-fabrics-explained",
    title: "Sofa fabrics explained",
    body: `
      Performance fabrics resist stains and are great for families...
      Natural fibers offer breathability and a premium feel...
    `,
  },
  {
    slug: "care-and-maintenance",
    title: "Care and maintenance",
    body: `
      Vacuum weekly, rotate cushions monthly, and spot-clean spills promptly...
    `,
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-slate max-w-3xl">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      <div className="h-48 w-full rounded-lg bg-muted" />
      <div className="mt-6 whitespace-pre-line text-base leading-7 text-slate-700">
        {post.body.trim()}
      </div>
    </article>
  );
}

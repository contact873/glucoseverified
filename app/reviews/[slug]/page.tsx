import { createClient } from "@sanity/client";
import { notFound } from "next/navigation";

const client = createClient({
  projectId: "lofyvk3d",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

interface Review {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  rating?: number;
  content?: string;
  pros?: string[];
  cons?: string[];
}

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "supplementReview"]{ slug }`
  );
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const review: Review | null = await client.fetch(
    `*[_type == "supplementReview" && slug.current == $slug][0]{
      _id, title, slug, excerpt, rating, content, pros, cons
    }`,
    { slug }
  );

  if (!review) return notFound();

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{review.title}</h1>
      {review.rating && (
        <p className="text-yellow-600 text-lg mb-4">Rating: {review.rating}/10</p>
      )}
      {review.excerpt && (
        <p className="text-gray-600 text-lg mb-6">{review.excerpt}</p>
      )}
      {review.content && (
        <div className="prose max-w-none mb-6">
          <p>{review.content}</p>
        </div>
      )}
      {review.pros && review.pros.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Pros</h2>
          <ul className="list-disc pl-5">
            {review.pros.map((pro, i) => (
              <li key={i} className="text-gray-700">{pro}</li>
            ))}
          </ul>
        </div>
      )}
      {review.cons && review.cons.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Cons</h2>
          <ul className="list-disc pl-5">
            {review.cons.map((con, i) => (
              <li key={i} className="text-gray-700">{con}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
import { createClient } from "@sanity/client";
import Link from "next/link";
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
}
export default async function ReviewsPage() {
  const reviews: Review[] = await client.fetch(
    `*[_type == "supplementReview"] | order(_createdAt desc) {
      _id, title, slug, excerpt, rating
    }`
  );
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Supplement Reviews</h1>
      <div className="grid gap-6">
        {reviews.map((review) => (
          <Link
            key={review._id}
            href={`/reviews/${review.slug.current}`}
            className="block p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{review.title}</h2>
            {review.rating && (
              <p className="text-yellow-600 mb-2">Rating: {review.rating}/10</p>
            )}
            {review.excerpt && (
              <p className="text-gray-600">{review.excerpt}</p>
            )}
          </Link>
        ))}
        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet. Check back soon!</p>
        )}
      </div>
    </main>
  );
}

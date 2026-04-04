import Link from 'next/link'
import client from '@/lib/sanityClient'

interface Review {
  _id: string
  name: string
  slug: { current: string }
  rating?: string
  category?: string
  evidence?: string
  benefits?: string[]
}

export default async function ReviewsPage() {
  const reviews: Review[] = await client.fetch(
    '*[_type == "supplement"] | order(_createdAt desc) { _id, name, slug, rating, category, evidence, benefits }'
  )

  return (
    <main className='min-h-screen bg-gray-50'>
      <nav className='bg-white shadow-sm px-8 py-4 flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold text-green-700'>GlucoseVerified</Link>
        <div className='flex gap-6 text-sm font-medium text-gray-600'>
          <Link href='/quiz' className='hover:text-green-700'>Take Quiz</Link>
          <Link href='/reviews' className='hover:text-green-700'>Reviews</Link>
        </div>
      </nav>
      <div className='max-w-5xl mx-auto px-8 py-12'>
        <h1 className='text-4xl font-bold text-gray-900 mb-2'>Supplement Reviews</h1>
        <p className='text-gray-500 mb-10'>Evidence-based ratings for blood sugar supplements</p>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {reviews.map((review) => (
            <Link key={review._id} href={`/reviews/${review.slug?.current}`}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100'>
              <div className='flex justify-between items-start mb-3'>
                <h2 className='text-lg font-semibold text-gray-900'>{review.n
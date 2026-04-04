import Link from 'next/link';
export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-green-50 to-white'>
      <nav className='bg-white shadow-sm px-8 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-green-700'>GlucoseVerified</h1>
        <div className='flex gap-6 text-sm font-medium text-gray-600'>
          <Link href='/quiz' className='hover:text-green-700'>Take Quiz</Link>
          <Link href='/reviews' className='hover:text-green-700'>Reviews</Link>
          <Link href='/guide' className='hover:text-green-700'>Free Guide</Link>
        </div>
      </nav>
      <section className='max-w-4xl mx-auto px-8 py-20 text-center'>
        <h2 className='text-5xl font-bold text-gray-900 mb-6'>Find the Right Blood Sugar Supplement</h2>
        <p className='text-xl text-gray-600 mb-10'>Evidence-based reviews to help you make informed decisions about glucose management.</p>
        <div className='flex gap-4 justify-center'>
          <Link href='/quiz' className='bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700'>Take the Quiz</Link>
          <Link href='/reviews' className='border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50'>See Reviews</Link>
        </div>
      </section>
    </main>
  );
}

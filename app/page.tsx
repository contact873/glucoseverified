import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">GlucoseVerified</h1>
      <nav className="flex gap-4">
        <Link href="/quiz">Take Diabetes Quiz</Link>
        <Link href="/guide">Free Guide</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/reviews">Reviews</Link>
      </nav>
    </main>
  );
}
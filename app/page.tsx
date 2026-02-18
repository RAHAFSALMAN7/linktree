import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 13 }, (_, i) => (
          <Link
            key={i}
            href={`/page${i + 1}`}
            className="px-6 py-4 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-800 transition"
          >
            Page {i + 1}
          </Link>
        ))}
      </div>
    </main>
  );
}

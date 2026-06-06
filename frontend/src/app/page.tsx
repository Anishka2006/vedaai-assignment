import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center">

        <h1 className="text-4xl font-bold mb-6">
          VedaAI
        </h1>

        <Link
          href="/dashboard"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Open Dashboard
        </Link>

      </div>

    </div>
  );
}
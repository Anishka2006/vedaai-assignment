"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 min-h-screen border-r bg-white px-6 py-8">
      <h1
        className="text-2xl font-bold mb-10 cursor-pointer"
        onClick={() => router.push("/")}
      >
        VedaAI
      </h1>

      <nav>
        <ul className="space-y-5">

          <li
            onClick={() => router.push("/")}
            className="cursor-pointer text-gray-700 hover:text-black"
          >
            Home
          </li>

          <li
            onClick={() => router.push("/groups")}
            className="cursor-pointer text-gray-700 hover:text-black"
          >
            My Groups
          </li>

          <li
            onClick={() => router.push("/assignments")}
            className="cursor-pointer text-gray-700 hover:text-black"
          >
            Assignments
          </li>

          <li
            onClick={() => router.push("/ai-toolkit")}
            className="cursor-pointer text-gray-700 hover:text-black"
          >
            AI Teacher Toolkit
          </li>

          <li
            onClick={() => router.push("/library")}
            className="cursor-pointer text-gray-700 hover:text-black"
          >
            My Library
          </li>

          <li
            onClick={() => router.push("/settings")}
            className="cursor-pointer text-gray-700 hover:text-black"
          >
            Settings
          </li>

        </ul>
      </nav>
    </aside>
  );
}
export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white px-6 py-8">
      <h1 className="text-2xl font-bold mb-10">
        VedaAI
      </h1>

      <nav>
        <ul className="space-y-5 text-gray-700">
        <li className="cursor-pointer text-gray-700 hover:text-black">
            Home
          </li>

          <li className="cursor-pointer text-gray-700 hover:text-black">
            My Groups
          </li>

          <li className="cursor-pointer text-gray-700 hover:text-black">
            Assignments
          </li>

          <li className="cursor-pointer text-gray-700 hover:text-black">
            AI Teacher Toolkit
          </li>

          <li className="cursor-pointer text-gray-700 hover:text-black">
            My Library
          </li>

          <li className="cursor-pointer text-gray-700 hover:text-black">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}
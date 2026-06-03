export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white p-4">
      <h1 className="text-2xl font-bold mb-8">
        VedaAI
      </h1>

      <nav>
        <ul className="space-y-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">My Groups</li>
          <li className="cursor-pointer">Assignments</li>
          <li className="cursor-pointer">AI Teacher Toolkit</li>
          <li className="cursor-pointer">My Library</li>
          <li className="cursor-pointer">Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
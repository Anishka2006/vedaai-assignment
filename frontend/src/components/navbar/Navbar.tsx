export default function Navbar() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-8 bg-white text-black">
      <button className="font-medium">
        ← Back
      </button>

      <div className="flex items-center gap-4">
        <span className="text-xl">
          🔔
        </span>

        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
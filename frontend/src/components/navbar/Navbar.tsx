export default function Navbar() {
  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <button>
        ← Back
      </button>

      <div className="flex items-center gap-4">
        <span>🔔</span>

        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
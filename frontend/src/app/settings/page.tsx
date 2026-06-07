export default function SettingsPage() {
    return (
      <div className="p-8">
  
        <h1 className="text-3xl font-bold mb-8">
          Settings
        </h1>
  
        <div className="bg-white border rounded-xl p-6 space-y-4">
  
          <input
            placeholder="School Name"
            className="border p-3 rounded-lg w-full"
          />
  
          <input
            placeholder="Teacher Name"
            className="border p-3 rounded-lg w-full"
          />
  
          <button
            className="bg-black text-white px-5 py-2 rounded-lg"
          >
            Save Settings
          </button>
  
        </div>
  
      </div>
    );
  }
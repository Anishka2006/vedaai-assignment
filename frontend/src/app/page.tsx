export default function HomePage() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Teacher Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl border">
          <h2 className="text-gray-500">
            Assignments
          </h2>
          <p className="text-3xl font-bold">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h2 className="text-gray-500">
            Groups
          </h2>
          <p className="text-3xl font-bold">
            4
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h2 className="text-gray-500">
            Resources
          </h2>
          <p className="text-3xl font-bold">
            28
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h2 className="text-gray-500">
            Pending
          </h2>
          <p className="text-3xl font-bold">
            3
          </p>
        </div>

      </div>

    </div>
  );
}
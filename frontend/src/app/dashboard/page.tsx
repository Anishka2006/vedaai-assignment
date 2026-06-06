import Link from "next/link";

import {
  Home,
  Users,
  FileText,
  Library,
  Settings,
  Bell,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] p-4">

      <div className="flex gap-4 h-[95vh]">

        {/* Sidebar */}
        <div className="w-[280px] bg-white rounded-3xl p-6 shadow-sm flex flex-col">

          <h1 className="text-4xl font-bold mb-10">
            VedaAI
          </h1>

          <Link
            href="/assignments/create"
            className="
              bg-black
              text-white
              rounded-full
              py-4
              flex
              items-center
              justify-center
              gap-2
              mb-10
            "
          >
            <Plus size={18} />
            Create Assignment
          </Link>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Home size={20} />
              Home
            </div>

            <div className="flex items-center gap-3">
              <Users size={20} />
              My Groups
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                bg-gray-100
                p-3
                rounded-xl
              "
            >
              <FileText size={20} />
              Assignments
            </div>

            <div className="flex items-center gap-3">
              📚 AI Teacher Toolkit
            </div>

            <div className="flex items-center gap-3">
              <Library size={20} />
              My Library
            </div>

          </div>

          <div className="mt-auto">

            <div className="flex items-center gap-3 mb-6">
              <Settings size={20} />
              Settings
            </div>

            <div className="bg-gray-100 rounded-2xl p-4">

              <div className="font-semibold">
                Delhi Public School
              </div>

              <div className="text-sm text-gray-500">
                Bokaro Steel City
              </div>

            </div>

          </div>

        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col">

          {/* Top Bar */}
          <div
            className="
              bg-white
              rounded-2xl
              px-6
              py-4
              flex
              justify-between
              items-center
            "
          >

            <div className="font-medium">
              Assignment
            </div>

            <div className="flex items-center gap-6">

              <Bell size={22} />

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  A
                </div>

                <div>
                  <div className="font-medium">
                    Anishka
                  </div>

                  <div className="text-xs text-gray-500">
                    Student
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Empty State */}
          <div
            className="
              flex-1
              flex
              flex-col
              justify-center
              items-center
              text-center
            "
          >

            <div className="text-[120px] mb-6">
              📄
            </div>

            <h2 className="text-5xl font-bold mb-4">
              No assignments yet
            </h2>

            <p className="text-gray-500 max-w-xl mb-8">
              Create your first assignment and start
              generating AI-powered question papers.
            </p>

            <Link
              href="/assignments/create"
              className="
                bg-black
                text-white
                px-8
                py-4
                rounded-full
              "
            >
              Create Your First Assignment
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
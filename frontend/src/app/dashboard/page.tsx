import Link from "next/link";

import {
  Home,
  Users,
  FileText,
  Library,
  Settings,
  Bell,
  Plus,
  ClipboardList,
  CheckCircle,
  Clock,
  BookOpen,
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

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Home size={20} />
              Home
            </Link>

            <Link
              href="/groups"
              className="flex items-center gap-3"
            >
              <Users size={20} />
              My Groups
            </Link>

            <Link
              href="/assignments"
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
            </Link>

            <Link
              href="/ai-toolkit"
              className="flex items-center gap-3"
            >
              📚 AI Teacher Toolkit
            </Link>

            <Link
              href="/library"
              className="flex items-center gap-3"
            >
              <Library size={20} />
              My Library
            </Link>

          </div>

          <div className="mt-auto">

            <Link
              href="/settings"
              className="flex items-center gap-3 mb-6"
            >
              <Settings size={20} />
              Settings
            </Link>

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

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4">

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

            <div>

              <h1 className="text-2xl font-bold">
                Welcome Back, Educator 👋
              </h1>

              <p className="text-gray-500">
                Manage assignments and AI-powered assessments
              </p>

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
                    Educator
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">

            <div className="bg-white rounded-2xl p-6">

              <ClipboardList
                size={28}
                className="mb-3"
              />

              <div className="text-3xl font-bold">
                12
              </div>

              <div className="text-gray-500">
                Assignments
              </div>

            </div>

            <div className="bg-white rounded-2xl p-6">

              <CheckCircle
                size={28}
                className="mb-3"
              />

              <div className="text-3xl font-bold">
                9
              </div>

              <div className="text-gray-500">
                Completed
              </div>

            </div>

            <div className="bg-white rounded-2xl p-6">

              <Clock
                size={28}
                className="mb-3"
              />

              <div className="text-3xl font-bold">
                3
              </div>

              <div className="text-gray-500">
                Pending
              </div>

            </div>

            <div className="bg-white rounded-2xl p-6">

              <BookOpen
                size={28}
                className="mb-3"
              />

              <div className="text-3xl font-bold">
                4
              </div>

              <div className="text-gray-500">
                Groups
              </div>

            </div>

          </div>

          {/* Recent Assignments */}
          <div className="bg-white rounded-2xl p-6">

            <div className="flex justify-between mb-6">

              <h2 className="text-xl font-bold">
                Recent Assignments
              </h2>

              <Link
                href="/assignments"
                className="text-blue-600"
              >
                View All
              </Link>

            </div>

            <div className="space-y-4">

              <div className="border rounded-xl p-4 flex justify-between">

                <div>

                  <h3 className="font-semibold">
                    Science Test
                  </h3>

                  <p className="text-gray-500 text-sm">
                    5 MCQs + 2 Long Questions
                  </p>

                </div>

                <span className="text-green-600 font-medium">
                  Completed
                </span>

              </div>

              <div className="border rounded-xl p-4 flex justify-between">

                <div>

                  <h3 className="font-semibold">
                    Biology Quiz
                  </h3>

                  <p className="text-gray-500 text-sm">
                    AI Generated Assessment
                  </p>

                </div>

                <span className="text-yellow-600 font-medium">
                  Pending
                </span>

              </div>

            </div>

          </div>

          {/* Notifications */}
          <div className="bg-white rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-4">
              Recent Activity
            </h2>

            <div className="space-y-3">

              <div>
                ✅ Science Test generated successfully
              </div>

              <div>
                📚 New worksheet added to library
              </div>

              <div>
                👥 Class 9A group created
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
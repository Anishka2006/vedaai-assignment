import Link from "next/link";

import MainLayout from "@/components/layout/MainLayout";
import AssignmentCard from "@/components/assignment/AssignmentCard";

const assignments = [
  {
    title: "Science Assessment",
    dueDate: "10 June 2026",
    assignedDate: "01 June 2026",
  },
  {
    title: "Mathematics Assessment",
    dueDate: "12 June 2026",
    assignedDate: "02 June 2026",
  },
  {
    title: "English Assessment",
    dueDate: "15 June 2026",
    assignedDate: "03 June 2026",
  },
];

export default function AssignmentsPage() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Assignments
        </h1>

        <Link
          href="/assignments/create"
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          Create Assignment
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.title}
            title={assignment.title}
            dueDate={assignment.dueDate}
            assignedDate={assignment.assignedDate}
          />
        ))}
      </div>
    </MainLayout>
  );
}
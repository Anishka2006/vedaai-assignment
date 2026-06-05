import MainLayout from "@/components/layout/MainLayout";
import AssignmentForm from "@/components/assignment/AssignmentForm";

export default function CreateAssignmentPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Create Assignment
        </h1>

        <AssignmentForm />

      </div>
    </MainLayout>
  );
}
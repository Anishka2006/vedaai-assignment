interface AssignmentCardProps {
    title: string;
    dueDate: string;
    assignedDate: string;
  }
  
  export default function AssignmentCard({
    title,
    dueDate,
    assignedDate,
  }: AssignmentCardProps) {
    return (
        <div className="bg-white text-black rounded-xl border p-5 shadow-sm">
        <h3 className="font-semibold text-lg mb-3">
          {title}
        </h3>
  
        <p className="text-gray-600">
          Due: {dueDate}
        </p>
  
        <p className="text-gray-600">
          Assigned: {assignedDate}
        </p>
      </div>
    );
  }
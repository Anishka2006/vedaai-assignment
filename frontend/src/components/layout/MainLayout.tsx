import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: Props) {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
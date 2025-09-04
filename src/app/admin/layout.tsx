import { AdminSidebar } from "@/components/layout/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-6 bg-gradient-to-b from-background to-muted/30 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}
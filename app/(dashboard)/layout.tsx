import { Navbar, Sidebar } from '@/components/layout';

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16">
          {children}
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
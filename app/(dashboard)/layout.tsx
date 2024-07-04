'use client';

import { ApolloProvider } from '@apollo/client';

import { Navbar, Sidebar } from '@/components/layout';
import { Toaster } from '@/components/ui/toaster';
import client from '@/lib/apollo-client';

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Toaster />
      <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16">
          {children}
        </main>
      </div>
    </ApolloProvider>
  );
};

export default AdminLayout;

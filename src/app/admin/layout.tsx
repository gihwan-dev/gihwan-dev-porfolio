import React from 'react';
import MainFooter from '~/components/MainFooter';
import { SideNavBar } from '~/features/admin';
import { getServerAuthSession } from '~/server/auth';

const AdminLayout: React.FC<{
  children: React.ReactNode;
  login: React.ReactNode;
}> = async ({ children, login }) => {
  const session = await getServerAuthSession();
  // footer 만들어야함
  return (
    <div className="w-full h-screen overflow-hidden">
      {session ? (
        <>
          <SideNavBar />
          <main className="w-full h-full overflow-y-auto">{children}</main>
          <MainFooter />
        </>
      ) : (
        <>{login}</>
      )}
    </div>
  );
};

export default AdminLayout;

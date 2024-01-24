import { type FC, type ReactNode } from 'react';
import { SideNavBar } from '~/features/admin';
import { getServerAuthSession } from '~/server/auth';

const AdminLayout: FC<{
  children: ReactNode;
  login: ReactNode;
}> = async ({ children, login }) => {
  const session = await getServerAuthSession();
  // footer 만들어야함
  return (
    <div className="w-full h-screen overflow-hidden">
      {session ? (
        <>
          <SideNavBar />
          <main className="w-full h-full overflow-y-auto">{children}</main>
        </>
      ) : (
        <>{login}</>
      )}
    </div>
  );
};

export default AdminLayout;

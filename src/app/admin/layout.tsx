import { type FC, type ReactNode } from 'react';
import { BottomNavBar } from '~/features/admin';
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
          <BottomNavBar />
          <main className="w-full h-full overflow-y-auto">{children}</main>
        </>
      ) : (
        <>{login}</>
      )}
    </div>
  );
};

export default AdminLayout;

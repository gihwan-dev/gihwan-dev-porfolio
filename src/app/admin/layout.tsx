import React from 'react';
import { getServerAuthSession } from '~/server/auth';

const AdminLayout: React.FC<{
  children: React.ReactNode;
  login: React.ReactNode;
}> = async ({ children, login }) => {
  const session = await getServerAuthSession();

  return (
    <div className="w-full h-screen overflow-hidden">
      <nav></nav>
      {session ? children : login}
    </div>
  );
};

export default AdminLayout;

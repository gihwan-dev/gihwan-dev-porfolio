import React from 'react';
import { SideNavBar } from '~/features/admin';
import { getServerAuthSession } from '~/server/auth';

const AdminLayout: React.FC<{
  children: React.ReactNode;
  login: React.ReactNode;
}> = async ({ children, login }) => {
  const session = await getServerAuthSession();

  return (
    <div className="w-full h-screen overflow-hidden">
      {/**
       * TODO: 네비게이션바 구현 및 레이아웃 완성 시키기
       * TODO: 유저 관리 페이지 만들고 아이디 하나 만들어 둔 뒤 login : session 적용
       */}
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

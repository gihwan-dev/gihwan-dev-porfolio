import React from 'react';
import MainNav from '~/components/MainNav';

const MainPageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    // TODO: 네비게이션 만들기
    <div className="w-full h-full bg-main-background min-h-dvh">
      <MainNav />
      {children}
    </div>
  );
};

export default MainPageLayout;

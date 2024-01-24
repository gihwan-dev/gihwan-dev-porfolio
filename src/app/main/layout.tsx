import { type FC, type ReactNode } from 'react';

import MainFooter from '~/components/MainFooter';
import MainNav from '~/components/MainNav';

const MainPageLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="w-full h-full bg-main-background min-h-dvh overflow-x-hidden">
      <MainNav />
      {children}
      <MainFooter />
    </div>
  );
};

export default MainPageLayout;

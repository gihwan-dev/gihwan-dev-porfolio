import { type FC, type ReactNode } from 'react';

import MainFooter from '~/components/MainFooter';
import MainNav from '~/components/MainNav';

const MainPageLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="h-full min-h-dvh w-full overflow-x-hidden bg-main-background pt-[82px]">
      <MainNav />
      {children}
      <MainFooter />
    </div>
  );
};

export default MainPageLayout;

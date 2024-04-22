'use client';

import MainLogo from '~/assets/svgs/MainLogo';
import NavBarContentSelector from '~/components/NavBarContentSelector';
import { useWindowWidth } from '~/business/hooks/useWindowWidth';
import MainLogoMobile from '~/assets/svgs/MainLogoMobile';

const MainNav = () => {
  const { width } = useWindowWidth();
  const isMobile = width < 640;
  return (
    <nav className="fixed left-0 top-0 z-40 w-full bg-main-foreground">
      <div className="padding-nav main-container flex flex-row items-center justify-between py-10">
        <div>{isMobile ? <MainLogoMobile /> : <MainLogo />}</div>
        <NavBarContentSelector />
      </div>
    </nav>
  );
};

export default MainNav;

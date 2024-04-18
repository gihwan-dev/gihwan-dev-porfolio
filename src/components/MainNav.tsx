'use client';

import MainLogo from '~/assets/svgs/MainLogo';
import NavBarContentSelector from '~/components/NavBarContentSelector';

const MainNav = () => {
  return (
    <nav className="w-full bg-main-foreground">
      <div className="padding-nav main-container flex flex-row justify-between py-10">
        <div>
          <MainLogo />
        </div>
        <NavBarContentSelector />
      </div>
    </nav>
  );
};

export default MainNav;

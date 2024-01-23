'use client';

import React from 'react';
import MainLogo from '~/assets/svgs/MainLogo';
import LargeNavList from './LargeNavList';
import SmallNavList from './SmallNavList';

export const NAV_LIST = [
  { text: 'about me', href: '#about' },
  { text: 'blogs', href: '#blogs' },
  { text: 'projects', href: '#projects' },
  { text: 'skills', href: '#skills' },
  { text: 'contact', href: '#contact' },
];

const MainNav = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const widthChangeHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', widthChangeHandler);

    return () => {
      window.removeEventListener('resize', widthChangeHandler);
    };
  }, []);

  React.useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <nav className="w-full bg-main-foreground">
      <div className="padding-nav main-container flex flex-row py-10 justify-between">
        <div>
          <MainLogo />
        </div>
        {width >= 1024 ? (
          <LargeNavList navList={NAV_LIST} />
        ) : (
          <SmallNavList navList={NAV_LIST} />
        )}
      </div>
    </nav>
  );
};

export default MainNav;

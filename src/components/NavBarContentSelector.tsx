'use client';

import LargeNavList from '~/components/LargeNavList';
import SmallNavList from '~/components/SmallNavList';
import { useParams, usePathname } from 'next/navigation';
import NavBackToHomeButton from '~/components/NavBackToHomeButton';
import NavBackToProjectsButton from '~/components/NavBackToProjectsButton';
import { useWindowWidth } from '~/business/hooks/useWindowWidth';

export const NAV_LIST = [
  { text: 'about me', href: '#about' },
  { text: 'projects', href: '#projects' },
  { text: 'skills', href: '#skills' },
  { text: 'contact', href: '#contact' },
];

const NavBarContentSelector = () => {
  const { width } = useWindowWidth();
  const pathname = usePathname();
  const params = useParams();

  let content =
    width >= 1024 ? (
      <LargeNavList navList={NAV_LIST} />
    ) : (
      <SmallNavList navList={NAV_LIST} />
    );

  if (pathname.startsWith('/projects')) {
    if (typeof params.id === 'string') {
      content = <NavBackToProjectsButton />;
    } else {
      content = <NavBackToHomeButton />;
    }
  }

  if (pathname.startsWith('/admin')) {
    return <div></div>;
  }

  return <>{content}</>;
};

export default NavBarContentSelector;

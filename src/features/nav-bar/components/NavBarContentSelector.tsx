'use client';

import NavBackToHomeButtonView from './NavBackToHomeButtonView';
import NavBarBackToProjectsLinkView from './NavBarBackToProjectsLinkView';
import LargeNavList from './LargeNavList';
import SmallNavList from './SmallNavList';

interface NavBarContentSelectorProps {
  width: number;
  pathname: string;
  params: {
    id?: string;
  };
}

const NavBarContentSelector = ({
  width,
  pathname,
  params,
}: NavBarContentSelectorProps) => {
  let content = width >= 1024 ? <LargeNavList /> : <SmallNavList />;

  if (pathname.startsWith('/projects')) {
    if (typeof params.id === 'string') {
      content = <NavBarBackToProjectsLinkView />;
    } else {
      content = <NavBackToHomeButtonView />;
    }
  }

  if (pathname.startsWith('/admin')) {
    return <div></div>;
  }

  return content;
};

export default NavBarContentSelector;

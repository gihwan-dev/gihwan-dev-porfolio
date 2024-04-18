import LargeNavList from '~/components/LargeNavList';
import SmallNavList from '~/components/SmallNavList';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { debounce } from '~/utils/debounce';
import { useParams, usePathname } from 'next/navigation';
import NavBackToHomeButton from '~/components/NavBackToHomeButton';
import NavBackToProjectsButton from '~/components/NavBackToProjectsButton';

export const NAV_LIST = [
  { text: 'about me', href: '#about' },
  { text: 'projects', href: '#projects' },
  { text: 'skills', href: '#skills' },
  { text: 'contact', href: '#contact' },
];

const NavBarContentSelector = () => {
  const [width, setWidth] = useState(0);
  const pathname = usePathname();
  const params = useParams();

  const widthChangeHandler = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  const debounceWidthChange = useCallback(
    () => debounce(widthChangeHandler, 250),
    [widthChangeHandler],
  );

  useEffect(() => {
    window.addEventListener('resize', debounceWidthChange);

    return () => {
      window.removeEventListener('resize', debounceWidthChange);
    };
  }, [debounceWidthChange]);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  let content =
    width >= 1024 ? (
      <LargeNavList navList={NAV_LIST} />
    ) : (
      <SmallNavList navList={NAV_LIST} />
    );

  if (pathname.startsWith('/main/projects')) {
    if (typeof params.id === 'string') {
      content = <NavBackToProjectsButton />;
    } else {
      content = <NavBackToHomeButton />;
    }
  }
  return <>{content}</>;
};

export default NavBarContentSelector;

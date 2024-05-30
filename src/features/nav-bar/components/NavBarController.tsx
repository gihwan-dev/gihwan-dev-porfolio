'use client';

import NavBarContentSelector from './NavBarContentSelector';
import useMediaQuery from '~/hooks/useMediaQuery';
import Logo from '~/components/Logo';
import Container from '~/components/Container';
import NavBarLayoutView from './NavBarLayoutView';
import { useWindowWidth } from '~/hooks/useWindowWidth';
import { useParams, usePathname } from 'next/navigation';

const NavBarController = () => {
  const { isMobile } = useMediaQuery();
  const { width } = useWindowWidth();
  const pathname = usePathname();
  const params = useParams();

  return (
    <NavBarLayoutView>
      <Container
        className={
          'padding-nav flex w-full flex-row items-center justify-between'
        }
      >
        <Logo isMobile={isMobile} />
        <NavBarContentSelector
          width={width}
          pathname={pathname}
          params={params}
        />
      </Container>
    </NavBarLayoutView>
  );
};

export default NavBarController;

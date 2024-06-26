import Link from 'next/link';

const NavBarBackToProjectsLinkView = () => {
  return (
    <Link
      style={{
        letterSpacing: '0.2rem',
      }}
      className={'text-xs font-bold text-text-primary-red lg:text-sm'}
      href={'/projects'}
    >
      BACK TO PROJECTS
    </Link>
  );
};

export default NavBarBackToProjectsLinkView;

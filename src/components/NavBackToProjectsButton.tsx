import Link from 'next/link';

const NavBackToProjectsButton = () => {
  return (
    <Link
      style={{
        letterSpacing: '0.2rem',
      }}
      className={'text-xs font-bold text-text-primary-red lg:text-sm'}
      href={'/main/projects'}
    >
      BACK TO PROJECTS
    </Link>
  );
};

export default NavBackToProjectsButton;

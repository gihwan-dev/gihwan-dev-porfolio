import Link from 'next/link';

const NavBackToProjectsButton = () => {
  return (
    <Link
      style={{
        letterSpacing: '0.2rem',
      }}
      className={'font-bold text-text-primary-red'}
      href={'/main/projects'}
    >
      BACK TO PROJECTS {'>'}
    </Link>
  );
};

export default NavBackToProjectsButton;

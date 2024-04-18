import Link from 'next/link';

const NavBackToHomeButton = () => {
  return (
    <Link
      style={{
        letterSpacing: '0.2rem',
      }}
      className={'font-bold text-text-primary-red'}
      href={'/main'}
    >
      BACK TO HOME {'>'}
    </Link>
  );
};

export default NavBackToHomeButton;

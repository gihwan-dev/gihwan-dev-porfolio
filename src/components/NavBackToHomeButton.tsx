import Link from 'next/link';

const NavBackToHomeButton = () => {
  return (
    <Link
      style={{
        letterSpacing: '0.2rem',
      }}
      className={'text-xs font-bold text-text-primary-red lg:text-sm'}
      href={'/main'}
    >
      BACK TO HOME
    </Link>
  );
};

export default NavBackToHomeButton;

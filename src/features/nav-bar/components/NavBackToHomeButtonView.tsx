import Link from 'next/link';

const NavBackToHomeButtonView = () => {
  return (
    <Link
      style={{
        letterSpacing: '0.2rem',
      }}
      className={'text-xs font-bold text-text-primary-red lg:text-sm'}
      href={'/'}
    >
      BACK TO HOME
    </Link>
  );
};

export default NavBackToHomeButtonView;

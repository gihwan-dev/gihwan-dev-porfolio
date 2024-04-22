import Link from 'next/link';

const SnsEmailSubmit = () => {
  return (
    <Link
      href={'mailto:rlghks3004@gmail.com'}
      className={
        'mx-auto rounded-sm bg-text-primary-red px-8 py-3 font-bold text-white transition-all duration-300 hover:opacity-80'
      }
    >
      Send email
    </Link>
  );
};

export default SnsEmailSubmit;

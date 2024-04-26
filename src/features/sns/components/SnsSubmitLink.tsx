import Link from 'next/link';
import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SnsSubmitLink: FC<Props> = ({ children }) => {
  return (
    <Link
      href={'mailto:rlghks3004@gmail.com'}
      className={
        'mx-auto rounded-sm bg-text-primary-red px-8 py-3 font-bold text-white transition-all duration-300 hover:opacity-80'
      }
    >
      {children}
    </Link>
  );
};

export default SnsSubmitLink;

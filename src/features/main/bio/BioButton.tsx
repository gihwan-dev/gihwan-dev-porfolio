import Link from 'next/link';
import { type FC } from 'react';

const BioButton: FC<{
  resume_link: string;
}> = ({ resume_link }) => {
  return (
    <Link
      className="px-12 py-4 bg-text-primary-red text-white rounded-sm font-bold hover:opacity-70 transition-all"
      href={resume_link}
    >
      자세히
    </Link>
  );
};

export default BioButton;

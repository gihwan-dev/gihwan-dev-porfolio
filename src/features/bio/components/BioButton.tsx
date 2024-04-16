import Link from 'next/link';
import { type FC } from 'react';

const BioButton: FC<{
  resume_link: string;
}> = ({ resume_link }) => {
  return (
    <Link
      className="rounded-sm bg-text-primary-red px-12 py-4 font-bold text-white transition-all hover:opacity-70"
      href={resume_link}
      target="_blank"
    >
      자세히 보기
    </Link>
  );
};

export default BioButton;

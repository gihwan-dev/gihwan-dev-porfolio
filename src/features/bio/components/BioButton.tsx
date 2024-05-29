import Link from 'next/link';
import { api } from '~/trpc/server';

const BioButton = async () => {
  const link = await api.bio.getBioLink.query();

  if (!link) {
    return (
      <Link
        className="rounded-sm bg-text-primary-red px-12 py-4 font-bold text-white transition-all hover:opacity-70"
        href="/"
      >
        링크가 없습니다...
      </Link>
    );
  }
  return (
    <Link
      className="rounded-sm bg-text-primary-red px-12 py-4 font-bold text-white transition-all hover:opacity-70"
      href={link.resume_link}
      target="_blank"
    >
      이력서 보기
    </Link>
  );
};

export default BioButton;

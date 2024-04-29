import Link from 'next/link';
import React from 'react';

export default function ProjectCarouselShowMore() {
  return (
    <div className={'flex w-full flex-row justify-end px-8 py-2 lg:px-4'}>
      <Link
        className={
          'font-bold text-white transition-all duration-300 hover:-translate-y-1'
        }
        href={'/projects'}
      >
        show more {'>'}
      </Link>
    </div>
  );
}

import Link from 'next/link';

const ProjectCarouselShowMoreLink = () => {
  return (
    <div className={'flex w-full flex-row justify-end px-4 py-2'}>
      <Link
        className={
          'font-bold text-white transition-all duration-300 hover:-translate-y-1'
        }
        href={'/main/projects'}
      >
        show more {'>'}
      </Link>
    </div>
  );
};

export default ProjectCarouselShowMoreLink;

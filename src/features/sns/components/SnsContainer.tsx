import Link from 'next/link';
import NotionIcon from '~/assets/svgs/NotionIcon';
import GithubIcon from '~/assets/svgs/GithubIcon';
import VelogIcon from '~/assets/svgs/VelogIcon';

export const SnsContainer = () => {
  return (
    <div className={'flex flex-row gap-12 sm:gap-24'}>
      <Link
        target={'_blank'}
        className={'transition-all hover:scale-110'}
        href={
          'https://circular-error-a3d.notion.site/bc801bc48ee74394a56268638a294838?pvs=4'
        }
      >
        <NotionIcon />
      </Link>
      <Link
        target={'_blank'}
        className={'transition-all hover:scale-110'}
        href={'https://github.com/gihwan-dev'}
      >
        <GithubIcon />
      </Link>
      <Link
        target={'_blank'}
        className={'transition-all hover:scale-110'}
        href={'https://velog.io/@koreanthuglife/posts'}
      >
        <VelogIcon />
      </Link>
    </div>
  );
};

export default SnsContainer;

import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import Container from '~/components/Container';
import SnsIconContainer from './SnsIconContainer';
import SnsDivider from './SnsDivider';
import SnsSubmitLink from './SnsSubmitLink';
import Link from 'next/link';
import NotionIcon from '~/assets/svgs/NotionIcon';
import GithubIcon from '~/assets/svgs/GithubIcon';
import VelogIcon from '~/assets/svgs/VelogIcon';

const Sns = () => {
  return (
    <Section id={'#contact'} foreground>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'SNS'} />
        <SnsIconContainer>
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
        </SnsIconContainer>
        <SnsDivider />
        <SnsSubmitLink>Send email</SnsSubmitLink>
      </Container>
    </Section>
  );
};

export default Sns;

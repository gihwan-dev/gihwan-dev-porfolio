import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import Container from '~/components/Container';
import SnsContainer from './SnsContainer';
import SnsDivider from './SnsDivider';
import SnsEmailSubmit from './SnsEmailSubmit';

const SnsRoot = () => {
  return (
    <Section id={'#contact'} foreground>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'SNS'} />
        <SnsContainer />
        <SnsDivider />
        <SnsEmailSubmit />
      </Container>
    </Section>
  );
};

export default SnsRoot;

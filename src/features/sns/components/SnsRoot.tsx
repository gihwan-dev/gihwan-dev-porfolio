import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import Container from '~/components/Container';

const SnsRoot = () => {
  return (
    <Section id={'#sns'} foreground>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'SNS'} />
      </Container>
    </Section>
  );
};

export default SnsRoot;

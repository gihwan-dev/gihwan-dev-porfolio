import Section from '~/components/Section';
import Container from '~/components/Container';
import SectionTitle from '~/components/SectionTitle';
import SkillsTagViewSelector from './SkillsTagViewSelector';

const SkillsRoot = () => {
  return (
    <Section id={'#skills'}>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'Skills'} />
        <SkillsTagViewSelector />
      </Container>
    </Section>
  );
};

export default SkillsRoot;

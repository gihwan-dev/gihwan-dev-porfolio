import Section from '~/components/Section';
import Container from '~/components/Container';
import SectionTitle from '~/components/SectionTitle';
import SkillsTagView from './SkillsTagView';
import { api } from '~/trpc/server';
import BigTag from '~/components/BigTag';

const Skills = async () => {
  const data = await api.tag.getAllTagsWithCount.query();
  const mostUsedTags = data
    .sort((a, b) => b._count.Documents - a._count.Documents)
    .slice(0, 5);

  return (
    <Section id={'#skills'}>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'Most used technology'} />
        <SkillsTagView>
          {mostUsedTags.map(tag => (
            <BigTag
              key={tag.document_tag_id}
              name={tag.name}
              backgroundColor={tag.background_color}
              textColor={tag.text_color}
            />
          ))}
        </SkillsTagView>
      </Container>
    </Section>
  );
};

export default Skills;

import Section from '~/components/Section';
import Container from '~/components/Container';
import SectionTitle from '~/components/SectionTitle';
import SkillsTagView from './SkillsTagView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import SkillsTagList from './SkillsTagList';
import SkillsTagGraph from './SkillsTagGraph';
import { api } from '~/trpc/server';

const Skills = async () => {
  const data = await api.tag.getAllTagsWithCount.query();

  return (
    <Section id={'#skills'}>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'Skills'} />
        <SkillsTagView>
          <Tabs
            defaultValue="List"
            className="flex w-full flex-col items-center gap-12"
          >
            <TabsList>
              <TabsTrigger className={'w-[100px]'} value="List">
                List
              </TabsTrigger>
              <TabsTrigger className={'w-[100px]'} value="Graph">
                Graph
              </TabsTrigger>
            </TabsList>
            <TabsContent className={'w-full overflow-hidden'} value="List">
              <SkillsTagList tags={data} />
            </TabsContent>
            <TabsContent className={'w-full overflow-hidden'} value="Graph">
              <SkillsTagGraph tags={data} />
            </TabsContent>
          </Tabs>
        </SkillsTagView>
      </Container>
    </Section>
  );
};

export default Skills;

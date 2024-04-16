import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import SkillsTagGraph from './SkillsTagGraph';
import SkillsTagList from './SkillsTagList';
import { api } from '~/trpc/server';

const SkillsTagViewSelector = async () => {
  const data = await api.tag.getAllTagsWithCount.query();

  return (
    <div
      className={
        'flex w-full flex-col items-center rounded-lg bg-main-foreground pb-8 pt-12'
      }
    >
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
        <TabsContent className={'w-full'} value="List">
          <SkillsTagList tags={data} />
        </TabsContent>
        <TabsContent value="Graph">
          <SkillsTagGraph tags={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillsTagViewSelector;

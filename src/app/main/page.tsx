import { BioRoot } from '~/features/bio';
import { ProjectsRoot } from '~/features/projects';
import { SkillsRoot } from '~/features/skills';
import { SnsRoot } from '~/features/sns';
import { api } from '~/trpc/server';

export const dynamic = 'force-dynamic';

const MainPage = async () => {
  const documents = await api.document.getAllDocument.query();
  return (
    <main>
      <BioRoot />
      <ProjectsRoot documents={documents} />
      <SkillsRoot />
      <SnsRoot />
    </main>
  );
};

export default MainPage;

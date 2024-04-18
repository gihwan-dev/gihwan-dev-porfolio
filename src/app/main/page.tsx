import { BioRoot } from '~/features/bio';
import { ProjectsRoot } from '~/features/projects';
import { SkillsRoot } from '~/features/skills';
import { SnsRoot } from '~/features/sns';

const MainPage = () => {
  return (
    <main>
      <BioRoot />
      <ProjectsRoot />
      <SkillsRoot />
      <SnsRoot />
    </main>
  );
};

export default MainPage;

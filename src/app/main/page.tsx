import { BioRoot } from '~/features/bio';
import { ProjectsRoot } from '~/features/projects';
import { SkillsRoot } from '~/features/skills';

const MainPage = () => {
  return (
    <main>
      <BioRoot />
      <ProjectsRoot />
      <SkillsRoot />
    </main>
  );
};

export default MainPage;

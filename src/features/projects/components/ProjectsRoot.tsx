import Container from '~/components/Container';
import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import ProjectsCarousel from './ProjectsCarousel';

const ProjectsRoot = () => {
  return (
    <Section id="#projects" foreground>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'Projects'} />
        <ProjectsCarousel />
      </Container>
    </Section>
  );
};

export default ProjectsRoot;

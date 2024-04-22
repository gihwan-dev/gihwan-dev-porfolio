'use client';

import Container from '~/components/Container';
import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import ProjectsCarousel from './ProjectsCarousel';
import { Carousel, CarouselContent } from '~/components/ui/carousel';
import { type ProjectRootProps } from '../types';

const ProjectsRoot: React.FC<ProjectRootProps> = ({ documents }) => {
  return (
    <Section id="#projects" foreground>
      <Container className="flex flex-col items-center gap-16">
        <SectionTitle title={'Projects'} />
        <Carousel className={'w-10/12 max-w-6xl'}>
          {documents.map((document, index) => (
            <ProjectsCarousel
              document={document}
              key={`${document.document_id}-Project-Carousel`}
            >
              <ProjectsCarousel.ShowMore />
              <CarouselContent className={'-ml-4'}>
                <ProjectsCarousel.Item>
                  <ProjectsCarousel.Thumbnail>
                    {index === 0 && <ProjectsCarousel.Latest />}
                    <ProjectsCarousel.TechTagList />
                    <ProjectsCarousel.ShowTechTagButton />
                  </ProjectsCarousel.Thumbnail>
                  <ProjectsCarousel.Info>
                    <ProjectsCarousel.Title>
                      {document.title}
                    </ProjectsCarousel.Title>
                    <ProjectsCarousel.Description>
                      {document.description}
                    </ProjectsCarousel.Description>
                    <ProjectsCarousel.BottomHighlight />
                  </ProjectsCarousel.Info>
                </ProjectsCarousel.Item>
              </CarouselContent>
            </ProjectsCarousel>
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default ProjectsRoot;

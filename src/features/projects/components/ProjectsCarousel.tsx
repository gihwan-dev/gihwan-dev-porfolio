'use client';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import ProjectEmptyContent from './ProjectEmptyContent';
import { isArrayTruthy } from '~/lib/truthy';
import ProjectCarouselItem from './ProjectCarouselItem';
import { api } from '~/trpc/react';

const ProjectsCarousel = () => {
  const { data, isLoading, isError } = api.document.getAllDocument.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  let content = [<ProjectEmptyContent key={'project-carousel-empty'} />];

  if (isArrayTruthy(data)) {
    content = data.map(document => {
      return (
        <ProjectCarouselItem
          key={'project-carousel-item' + document.document_id}
          document={document}
        />
      );
    });
  }

  return (
    <Carousel className={'w-10/12 max-w-6xl'}>
      <CarouselContent className={'-ml-4'}>{...content}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarousel;

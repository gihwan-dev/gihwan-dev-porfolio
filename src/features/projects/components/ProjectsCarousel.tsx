'use client';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import { api } from '~/trpc/react';
import ProjectEmptyContent from './ProjectEmptyContent';
import { isArrayTruthy } from '~/lib/truthy';
import ProjectCarouselItem from './ProjectCarouselItem';

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
    <Carousel className={'w-10/12'}>
      <CarouselContent className={'-ml-1'}>{...content}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsCarousel;

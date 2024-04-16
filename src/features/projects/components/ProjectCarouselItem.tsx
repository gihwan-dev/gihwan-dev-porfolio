'use client';

import { CarouselItem } from '~/components/ui/carousel';
import { type Documents } from '@prisma/client';
import React from 'react';
import ProjectCarouselThumbnail from './ProjectCarouselThumbnail';
import ProjectCarouselInfo from '~/features/projects/components/ProjectCarouselInfo';

interface Props {
  document: Documents;
}

const ProjectCarouselItem: React.FC<Props> = ({ document }) => {
  return (
    <CarouselItem
      className={
        'group flex cursor-pointer flex-col gap-4 pl-4 lg:basis-1/2 xl:basis-1/3'
      }
    >
      <ProjectCarouselThumbnail thumbnail={document.thumbnail} />
      <ProjectCarouselInfo
        title={document.title}
        description={document.description}
      />
    </CarouselItem>
  );
};

export default ProjectCarouselItem;

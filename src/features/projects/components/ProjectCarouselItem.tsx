'use client';

import { CarouselItem } from '~/components/ui/carousel';
import { type Documents } from '@prisma/client';
import React from 'react';
import ProjectCarouselThumbnail from './ProjectCarouselThumbnail';

interface Props {
  document: Documents;
}

const ProjectCarouselItem: React.FC<Props> = ({ document }) => {
  return (
    <CarouselItem
      className={'flex flex-col gap-4 pl-4 lg:basis-1/2 xl:basis-1/3'}
    >
      <ProjectCarouselThumbnail thumbnail={document.thumbnail} />
      <div className={'flex w-full flex-col flex-wrap gap-2 px-4'}>
        <h3 className={'text-center text-lg font-bold text-white'}>
          {document.title}
        </h3>
        <p className={'text-md text-center text-gray-300'}>
          {document.description}
        </p>
      </div>
    </CarouselItem>
  );
};

export default ProjectCarouselItem;

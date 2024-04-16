'use client';

import { CarouselItem } from '~/components/ui/carousel';
import { type Document_Tags, type Documents } from '@prisma/client';
import React from 'react';
import ProjectCarouselThumbnail from './ProjectCarouselThumbnail';
import ProjectCarouselInfo from './ProjectCarouselInfo';
import ProjectCarouselLatestTag from './ProjectCarouselLatestTag';
import useNavigateTo from '~/app/hooks/useNavigateTo';

interface Props {
  document: Documents & { project_tags: Document_Tags[] };
  isLatest?: boolean;
}

const ProjectCarouselItem: React.FC<Props> = ({ document, isLatest }) => {
  const { navigate } = useNavigateTo();

  const onClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (target.tagName !== 'BUTTON') {
      navigate(`/main/projects/${document.document_id}`);
    }
  };

  return (
    <CarouselItem
      onClick={onClick}
      className={
        'group relative z-0 flex cursor-pointer flex-col gap-4 pl-4 lg:basis-1/2 xl:basis-1/3'
      }
    >
      {isLatest === true ? <ProjectCarouselLatestTag /> : null}
      <ProjectCarouselThumbnail
        tags={document.project_tags}
        thumbnail={document.thumbnail}
      />
      <ProjectCarouselInfo
        title={document.title}
        description={document.description}
      />
    </CarouselItem>
  );
};

export default ProjectCarouselItem;

import React, { useContext } from 'react';
import ProjectCarouselContext from './ProjectsCarouselContext';
import useNavigateTo from '~/hooks/useNavigateTo';
import { CarouselItem } from '~/components/ui/carousel';
import { type ChildrenProps } from '~/types/props-types';

export default function ProjectCarouselItem({ children }: ChildrenProps) {
  const context = useContext(ProjectCarouselContext);
  const { navigate } = useNavigateTo();

  if (!context) {
    return null;
  }

  const { document } = context;

  const onClick: React.MouseEventHandler<HTMLDivElement> = e => {
    const target = e.target as HTMLDivElement;
    if (target.tagName !== 'BUTTON') {
      navigate(`/projects/${document.document_id}`);
    }
  };

  return (
    <CarouselItem
      onClick={onClick}
      className={
        'group relative z-0 flex cursor-pointer flex-col items-center gap-4 pl-4 lg:basis-1/2 xl:basis-1/3'
      }
    >
      {children}
    </CarouselItem>
  );
}

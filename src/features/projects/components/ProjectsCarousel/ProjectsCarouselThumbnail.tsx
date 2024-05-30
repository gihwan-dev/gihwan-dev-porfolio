import React, { useContext } from 'react';
import ProjectCarouselContext from './ProjectsCarouselContext';
import { isImageSrcTruthy } from '~/lib/truthy';
import Image from 'next/image';
import { type ChildrenProps } from '~/types/props-types';

export default function ProjectCarouselThumbnail({ children }: ChildrenProps) {
  const context = useContext(ProjectCarouselContext);

  if (!context) {
    return null;
  }

  const { document } = context;
  return (
    <div
      className={
        'relative aspect-square w-11/12 overflow-hidden rounded-md bg-white opacity-70 transition-all duration-500 group-hover:opacity-100'
      }
    >
      {isImageSrcTruthy(document.thumbnail) ? (
        <Image
          sizes={'500'}
          src={document.thumbnail}
          alt={'project thumbnail'}
          className={'object-contain'}
          fill
        />
      ) : null}
      {children}
    </div>
  );
}

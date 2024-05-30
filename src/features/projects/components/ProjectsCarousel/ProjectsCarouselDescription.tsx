import React from 'react';
import { type ChildrenProps } from '~/types/props-types';

export default function ProjectCarouselDescription({
  children,
}: ChildrenProps) {
  return (
    <p
      className={
        'text-md line-clamp-3 whitespace-pre-wrap text-center text-gray-300'
      }
    >
      {children}
    </p>
  );
}

import type { ChildrenProps } from '../../types';
import React from 'react';

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

import React from 'react';
import { type ChildrenProps } from '~/types/props-types';

export default function ProjectCarouselInfo({ children }: ChildrenProps) {
  return (
    <div
      className={
        'box-border flex w-full flex-col flex-wrap items-center gap-2 px-8'
      }
    >
      {children}
    </div>
  );
}

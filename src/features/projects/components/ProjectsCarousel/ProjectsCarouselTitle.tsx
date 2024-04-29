import type { ChildrenProps } from '../../types';
import React from 'react';

export default function ProjectCarouselTitle({ children }: ChildrenProps) {
  return (
    <h3
      className={
        'whitespace-pre-wrap px-4 text-center text-lg font-bold text-white'
      }
    >
      {children}
    </h3>
  );
}

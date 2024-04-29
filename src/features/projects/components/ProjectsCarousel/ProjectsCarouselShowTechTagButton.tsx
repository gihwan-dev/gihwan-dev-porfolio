import React, { useContext } from 'react';
import ProjectCarouselContext from './ProjectsCarouselContext';

export default function ProjectCarouselShowTechTagButton() {
  const context = useContext(ProjectCarouselContext);

  if (!context) {
    return null;
  }

  const { toggleTechList } = context;
  return (
    <button
      onClick={toggleTechList}
      className={
        'absolute bottom-2 right-2 z-20 text-xs font-bold tracking-widest text-text-primary-red transition-all duration-500 hover:-translate-y-1'
      }
    >
      SHOW TECH TAG
    </button>
  );
}

import React from 'react';
import ProjectCarouselBottomHighlight from './ProjectCarouselBottomHighlight';

interface Props {
  title: string;
  description: string;
}

const ProjectCarouselInfo: React.FC<Props> = ({ title, description }) => {
  return (
    <div
      className={
        'box-border flex w-full flex-col flex-wrap items-center gap-2 px-8'
      }
    >
      <h3
        className={
          'whitespace-pre-wrap px-4 text-center text-lg font-bold text-white'
        }
      >
        {title}
      </h3>
      <p
        className={
          'text-md line-clamp-3 whitespace-pre-wrap text-center text-gray-300'
        }
      >
        {description}
      </p>
      <ProjectCarouselBottomHighlight />
    </div>
  );
};

export default ProjectCarouselInfo;

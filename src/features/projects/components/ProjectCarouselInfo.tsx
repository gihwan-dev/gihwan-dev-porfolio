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
        'box-border flex h-36 w-full flex-col flex-wrap items-center gap-2 px-8'
      }
    >
      <h3 className={'text-center text-lg font-bold text-white'}>{title}</h3>
      <p className={'text-md flex-1 text-center text-gray-300'}>
        {description}
      </p>
      <ProjectCarouselBottomHighlight />
    </div>
  );
};

export default ProjectCarouselInfo;

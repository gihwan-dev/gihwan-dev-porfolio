import React from 'react';

interface Props {
  title: string;
  description: string;
}

const ProjectCarouselInfo: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={'flex h-36 w-full flex-col flex-wrap items-center gap-2'}>
      <h3 className={'text-center text-lg font-bold text-white'}>{title}</h3>
      <p className={'text-md flex-1 text-center text-gray-300'}>
        {description}
      </p>
      <hr
        className={
          'w-20 rounded-full border-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        }
      />
    </div>
  );
};

export default ProjectCarouselInfo;

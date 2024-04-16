import React from 'react';

interface Props {
  onClick: () => void;
}

const ProjectCarouselShowTechTagButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'absolute bottom-2 right-2 z-20 text-xs font-bold tracking-widest text-text-primary-red transition-all duration-500 hover:-translate-y-1'
      }
    >
      SHOW TECH TAG
    </button>
  );
};

export default ProjectCarouselShowTechTagButton;

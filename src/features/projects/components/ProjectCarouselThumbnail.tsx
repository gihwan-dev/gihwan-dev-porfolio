import { isImageSrcTruthy } from '~/lib/truthy';
import Image from 'next/image';
import React, { useState } from 'react';
import ProjectCarouselShowTechTagButton from './ProjectCarouselShowTechTagButton';
import { type Document_Tags } from '@prisma/client';
import ProjectCarouselTechTagList from './ProjectCarouselTechTagList';

interface Props {
  thumbnail: string;
  tags: Document_Tags[];
}

const ProjectCarouselThumbnail: React.FC<Props> = ({ thumbnail, tags }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div
      className={
        'relative aspect-square w-full overflow-hidden rounded-md bg-white opacity-70 transition-all duration-500 group-hover:opacity-100'
      }
    >
      {isImageSrcTruthy(thumbnail) ? (
        <Image
          sizes={'500'}
          src={thumbnail}
          alt={'project thumbnail'}
          className={'object-contain'}
          fill
        />
      ) : null}
      {open && <ProjectCarouselTechTagList onClick={onClick} tags={tags} />}
      <ProjectCarouselShowTechTagButton onClick={onClick} />
    </div>
  );
};

export default ProjectCarouselThumbnail;

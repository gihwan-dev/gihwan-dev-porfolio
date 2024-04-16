import { isImageSrcTruthy } from '~/lib/truthy';
import Image from 'next/image';
import React from 'react';

interface Props {
  thumbnail: string;
}

const ProjectCarouselThumbnail: React.FC<Props> = ({ thumbnail }) => {
  return (
    <div
      className={
        'relative aspect-square w-full overflow-hidden rounded-md bg-white'
      }
    >
      {isImageSrcTruthy(thumbnail) ? (
        <Image
          src={thumbnail}
          alt={'project thumbnail'}
          className={'object-contain'}
          fill
        />
      ) : null}
    </div>
  );
};

export default ProjectCarouselThumbnail;

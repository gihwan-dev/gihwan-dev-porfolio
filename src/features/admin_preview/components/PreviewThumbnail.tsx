import React from 'react';

import Image from 'next/image';

type Props = {
  thumbnail: string;
};

const PreviewThumbnail: React.FC<Props> = async ({ thumbnail }: Props) => {
  return thumbnail ? (
    <div className="mx-auto my-10 aspect-video w-full max-w-7xl overflow-hidden rounded-md bg-gray-200">
      <Image
        fill={true}
        objectFit="cover"
        src={thumbnail}
        alt="document thumbnail"
      />
    </div>
  ) : (
    <></>
  );
};

export default PreviewThumbnail;

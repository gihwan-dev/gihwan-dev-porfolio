import React from 'react';

import Image from 'next/image';

type Props = {
  thumbnail: string;
};

const PreviewThumbnail: React.FC<Props> = async ({ thumbnail }: Props) => {
  return thumbnail ? (
    <div className="mx-auto aspect-video w-full max-w-7xl bg-gray-200">
      <Image
        fill={true}
        objectFit="cover"
        src={thumbnail}
        alt="document thumbnail"
      />
    </div>
  ) : (
    <h2>No Image</h2>
  );
};

export default PreviewThumbnail;

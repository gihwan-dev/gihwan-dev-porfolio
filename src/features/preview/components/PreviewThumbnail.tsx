import React from 'react';

import Image from 'next/image';

type Props = {
  thumbnail: string;
};

const PreviewThumbnail: React.FC<Props> = async ({ thumbnail }: Props) => {
  return thumbnail ? (
    <div className="mx-auto my-10 aspect-video w-full max-w-7xl overflow-hidden bg-gray-200 xl:rounded-md">
      <Image
        className={'object-cover'}
        fill={true}
        src={thumbnail}
        alt="document thumbnail"
      />
    </div>
  ) : (
    <></>
  );
};

export default PreviewThumbnail;

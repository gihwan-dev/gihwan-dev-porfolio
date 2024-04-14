'use client';

import Image from 'next/image';
import { useState, type ChangeEventHandler } from 'react';

interface Props {
  documentId: number;
  initThumbnail: string | null;
}

const ThumbnailInput: React.FC<Props> = ({ documentId, initThumbnail }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(initThumbnail);

  const onThumbnailChange: ChangeEventHandler<HTMLInputElement> = e => {
    const formData = new FormData();
    const image = e.target.files?.[0];

    if (!image) {
      window.alert('please upload thumbnail again');
      return;
    }

    formData.append('image-file', image);

    void fetch(`/api/image/${documentId}`, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        void res.json().then(data => {
          setThumbnail(data?.link as string);
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <label htmlFor="thumbnail-image">
        {thumbnail ? (
          <div className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md border font-bold text-black">
            <Image
              src={thumbnail}
              alt="post thumbnail"
              fill={true}
              objectFit="cover"
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center rounded-md border font-bold text-black">
            upload your thumbnail for post
          </div>
        )}
      </label>
      <input
        onChange={onThumbnailChange}
        className="hidden"
        id="thumbnail-image"
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export default ThumbnailInput;

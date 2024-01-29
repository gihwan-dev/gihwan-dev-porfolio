'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { type ChangeEventHandler, useState } from 'react';

const ThumbnailInput = () => {
  const params = useParams();
  const id = params.id;

  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const onThumbnailChange: ChangeEventHandler<HTMLInputElement> = e => {
    const formData = new FormData();
    const image = e.target.files?.[0];

    if (!image) {
      window.alert('please upload thumbnail again');
      return;
    }

    formData.append('image-file', image);

    if (!id) {
      window.alert('bad request... try refresh...');
      return;
    }

    void fetch(`/api/image/${id as string}`, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        void res.json().then(data => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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

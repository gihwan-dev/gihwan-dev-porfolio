import React from 'react';

import Image from 'next/image';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';

export default async function PreviewThumbnailView({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentThumbnail.query({
    documentId,
  });

  if (!data) {
    throw Error('썸네일을 불러오는데 실패했습니다.');
  }

  return data.thumbnail ? (
    <div className="relative mx-auto my-10 aspect-video w-full max-w-7xl overflow-hidden bg-gray-200 xl:rounded-md">
      <Image
        className={'object-cover'}
        fill={true}
        src={data.thumbnail}
        alt="document thumbnail"
      />
    </div>
  ) : (
    <></>
  );
}

import React from 'react';

import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';

export default async function PreviewDescriptionView({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentDescription.query({ documentId });

  if (!data) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <div className="mx-4 text-center text-lg text-gray-400">
      {data.description}
    </div>
  );
}

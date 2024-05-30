import React from 'react';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';

export default async function PreviewPublishedDate({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentPublishedDate.query({
    documentId,
  });

  if (!data) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 text-sm text-gray-300 xl:px-12">
      Published At: <strong>{data.reg_date.toDateString()}</strong>
    </div>
  );
}

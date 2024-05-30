import React from 'react';
import { api } from '~/trpc/server';
import { type DocumentIdProps } from '~/types/document-types';

export default async function PreviewTitleView({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentTitle.query({ documentId });

  if (!data) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <h1 className="mb-4 mt-24 text-center text-4xl text-white">{data.title}</h1>
  );
}

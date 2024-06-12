'use client';

import PreviewContentView from './PreviewContentView';

import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/react';
import PreviewContentSuspenseFallback from './PreviewContentSuspenseFallback';

export default function PreviewContent({ documentId }: DocumentIdProps) {
  const { data, isError, error, isLoading } =
    api.document.getDocumentContent.useQuery({ documentId });

  if (isLoading) {
    return <PreviewContentSuspenseFallback />;
  }

  if (isError) {
    throw error;
  }

  return (
    <PreviewContentView documentId={documentId} content={data?.content ?? ''} />
  );
}

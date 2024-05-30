import { Suspense } from 'react';
import { type DocumentIdProps } from '~/types/document-types';
import PreviewPublishedDateSuspenseFallback from './PreviewPublishedDateSuspenseFallback';

export default function PreviewPublishedDate({ documentId }: DocumentIdProps) {
  return (
    <Suspense fallback={<PreviewPublishedDateSuspenseFallback />}>
      <PreviewPublishedDate documentId={documentId} />
    </Suspense>
  );
}

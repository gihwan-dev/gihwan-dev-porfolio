import { type DocumentIdProps } from '~/types/document-types';
import PreviewContentController from './PreviewContentController';
import PreviewContentSuspenseFallback from './PreviewContentSuspenseFallback';
import { Suspense } from 'react';

export default function PreviewContent({ documentId }: DocumentIdProps) {
  return (
    <Suspense fallback={<PreviewContentSuspenseFallback />}>
      <PreviewContentController documentId={documentId} />;
    </Suspense>
  );
}

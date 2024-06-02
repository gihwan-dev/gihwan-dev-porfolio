import { Suspense } from 'react';

import PreviewContentView from './PreviewContentView';

import { type DocumentIdProps } from '~/types/document-types';
import PreviewContentSuspenseFallback from './PreviewContentSuspenseFallback';

export default function PreviewContent({ documentId }: DocumentIdProps) {
  return (
    <Suspense fallback={<PreviewContentSuspenseFallback />}>
      <PreviewContentView documentId={documentId} />
    </Suspense>
  );
}

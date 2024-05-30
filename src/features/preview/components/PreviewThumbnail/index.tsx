import { Suspense } from 'react';

import { type DocumentIdProps } from '~/types/document-types';

import PreviewThumbnailSuspenseFallback from './PreviewThumbnailSuspenseFallback';
import PreviewThumbnailView from './PreviewThumbnailView';

export default function PreviewThumbnail({ documentId }: DocumentIdProps) {
  return (
    <Suspense fallback={<PreviewThumbnailSuspenseFallback />}>
      <PreviewThumbnailView documentId={documentId} />
    </Suspense>
  );
}

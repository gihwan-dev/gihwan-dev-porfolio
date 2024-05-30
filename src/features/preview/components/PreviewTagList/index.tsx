import { type DocumentIdProps } from '~/types/document-types';
import { Suspense } from 'react';
import PreviewTagListView from './PreviewTagListView';
import PreviewTagListSuspenseFallback from './PreviewTagListSuspenseFallback';

export default function PreviewTagList({ documentId }: DocumentIdProps) {
  return (
    <Suspense fallback={<PreviewTagListSuspenseFallback />}>
      <PreviewTagListView documentId={documentId} />
    </Suspense>
  );
}

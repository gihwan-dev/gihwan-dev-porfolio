import { type DocumentIdProps } from '~/types/document-types';
import { Suspense } from 'react';
import PreviewStartEndDateView from './PreviewStartEndDateView';
import PreviewStartEndDateSuspenseFallback from './PreviewStartEndDateSuspenseFallback';

export default function PreviewStartEndDate({ documentId }: DocumentIdProps) {
  return (
    <Suspense fallback={<PreviewStartEndDateSuspenseFallback />}>
      <PreviewStartEndDateView documentId={documentId} />
    </Suspense>
  );
}

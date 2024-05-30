import { Suspense } from 'react';

import PreviewContentView from './PreviewContentView';

import { type DocumentIdProps } from '~/types/document-types';

export default function PreviewContent({ documentId }: DocumentIdProps) {
  return (
    <Suspense>
      <PreviewContentView documentId={documentId} />
    </Suspense>
  );
}

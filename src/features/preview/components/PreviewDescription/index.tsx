import { Suspense } from 'react';

import PreviewDescriptionView from './PreviewDescriptionView';

import { type DocumentIdProps } from '~/types/document-types';

export default function PreviewDescription({ documentId }: DocumentIdProps) {
  return (
    <Suspense>
      <PreviewDescriptionView documentId={documentId} />
    </Suspense>
  );
}

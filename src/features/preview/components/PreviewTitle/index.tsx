import { Suspense } from 'react';

import PreviewTitleView from './PreviewTitleView';

import { type DocumentIdProps } from '~/types/document-types';

export default function PreviewTitle({ documentId }: DocumentIdProps) {
  return (
    <Suspense>
      <PreviewTitleView documentId={documentId} />
    </Suspense>
  );
}

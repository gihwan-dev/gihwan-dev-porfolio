import PreviewContentView from './PreviewContentView';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';
import { Suspense } from 'react';

export default async function PreviewContentController({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentContent.query({ documentId });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/*useSearchParams 사용으로 client 컴포넌트와 되는걸 방지하기 위한 서스펜스 바운더리*/}
      <PreviewContentView
        documentId={documentId}
        content={data?.content ?? ''}
      />
    </Suspense>
  );
}

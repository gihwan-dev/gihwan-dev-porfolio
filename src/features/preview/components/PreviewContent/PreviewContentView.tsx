import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';

export default async function PreviewContentView({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentContent.query({ documentId });

  if (!data) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <div className="mx-auto w-full max-w-5xl xl:px-12">
      <MDEditor.Markdown
        source={data.content}
        className={'xl:rounded-md'}
        style={{
          color: 'white',
          padding: '2rem',
          whiteSpace: 'pre-wrap',
          background: 'var(--main-foreground)',
        }}
      />
    </div>
  );
}

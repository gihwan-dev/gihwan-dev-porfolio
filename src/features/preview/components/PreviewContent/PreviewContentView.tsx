'use client';

import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/react';
import PreviewContentSuspenseFallback from './PreviewContentSuspenseFallback';

export default function PreviewContentView({ documentId }: DocumentIdProps) {
  const { data, isError, isLoading, error } =
    api.document.getDocumentContent.useQuery({ documentId });

  if (isLoading) {
    return <PreviewContentSuspenseFallback />;
  }

  if (isError) {
    throw error;
  }

  return (
    <div className="mx-auto w-full max-w-5xl xl:px-12">
      <MDEditor.Markdown
        source={data?.content}
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

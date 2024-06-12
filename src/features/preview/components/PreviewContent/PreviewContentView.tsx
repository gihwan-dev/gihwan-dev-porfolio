'use client';

import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import useHeadingLink from '../../hooks/useHeadingLink';
import { type DocumentIdProps } from '~/types/document-types';

export default function PreviewContentView({
  content,
  documentId,
}: { content: string } & DocumentIdProps) {
  useHeadingLink(documentId);

  return (
    <div
      id={'mark-down-container'}
      className="mx-auto w-full max-w-5xl xl:px-12"
    >
      <MDEditor.Markdown
        source={content}
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

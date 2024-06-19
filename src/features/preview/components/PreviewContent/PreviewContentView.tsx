'use client';

import React from 'react';
import useHeadingLink from '../../hooks/useHeadingLink';
import { type DocumentIdProps } from '~/types/document-types';
import MDEditor from '@uiw/react-md-editor';

export default function PreviewContentView({
  content,
  documentId,
}: { content: string } & DocumentIdProps) {
  useHeadingLink(documentId);

  return (
    <div className="mx-auto w-full max-w-5xl xl:px-12">
      <MDEditor.Markdown source={content} />
    </div>
  );
}

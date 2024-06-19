'use client';

import React from 'react';
import useHeadingLink from '../../hooks/useHeadingLink';
import { type DocumentIdProps } from '~/types/document-types';
import MarkdownPreview from './MarkdownPreview';

export default function PreviewContentView({
  content,
  documentId,
}: { content: string } & DocumentIdProps) {
  useHeadingLink(documentId);

  return (
    <div className="mx-auto w-full max-w-5xl xl:px-12">
      <MarkdownPreview source={content} />
    </div>
  );
}

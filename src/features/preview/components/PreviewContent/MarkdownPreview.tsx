'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './markdown-preview.module.css';

interface MarkdownPreviewProps {
  source: string;
}

export default function MarkdownPreview({ source }: MarkdownPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState('');

  async function fetchMarkdown() {
    const { markdown_to_html } = await import('markdown');
    setContent(markdown_to_html(source));
  }

  useEffect(() => {
    void fetchMarkdown();

    ref?.current?.childNodes.forEach(node => {});
  });

  return (
    <div
      ref={ref}
      className={styles['markdown-container']}
      id={'mark-down-container'}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}

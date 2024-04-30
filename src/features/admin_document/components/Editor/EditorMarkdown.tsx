'use client';

import ReactMarkdown from '@uiw/react-md-editor';
import React from 'react';
import { useEditorHook } from '../../business/hooks/editor.hooks';

const EditorMarkdown = () => {
  const { model } = useEditorHook();

  return (
    <ReactMarkdown.Markdown
      style={{
        whiteSpace: 'pre-wrap',
        backgroundColor: 'var(--main-foreground)',
      }}
      className={'h-full w-full overflow-y-auto border-gray-300 p-2'}
      source={model}
    />
  );
};

export default EditorMarkdown;

'use client';

import React from 'react';
import MDEditor from '@uiw/react-md-editor';

type Props = {
  content: string;
};

const PreviewContent: React.FC<Props> = ({ content }) => {
  return (
    <div className="mx-auto w-full max-w-5xl px-12 pt-8">
      <MDEditor.Markdown
        source={content}
        className={'rounded-md'}
        style={{
          color: 'white',
          padding: '2rem',
          whiteSpace: 'pre-wrap',
          background: 'var(--main-foreground)',
        }}
      />
    </div>
  );
};

export default PreviewContent;

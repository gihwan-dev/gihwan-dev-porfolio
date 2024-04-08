'use client';

import React from 'react';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

type Props = {
  content: string;
};

const PreviewContent: React.FC<Props> = ({ content }) => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <FroalaEditorView model={content} config={{}} />;
    </div>
  );
};

export default PreviewContent;

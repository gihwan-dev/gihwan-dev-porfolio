'use client';

import React, { useRef } from 'react';

import { Button } from '~/components/ui/button';
import ReactMarkdown from '@uiw/react-md-editor';

import { useEditorHook } from '../business/hooks/editor.hooks';
import { ErrorBoundary } from 'react-error-boundary';
import EditorErrorFallback from './EditorErrorFallback';
import EditorLoadingSkeleton from './EditorLoadingSkeleton';
import ImageManageDialog from '~/features/admin_document/components/ImageManageDialog';

const Editor = () => {
  const {
    model,
    onModelChange,
    onSave,
    onEditClose,
    onPasteCapture,
    isLoading,
    isError,
  } = useEditorHook();
  const ref: React.MutableRefObject<HTMLTextAreaElement | null> = useRef(null);

  if (isError) {
    throw Error('데이터를 받아오는데 실패했습니다.');
  }

  if (isLoading) {
    return <EditorLoadingSkeleton />;
  }

  return (
    <ErrorBoundary fallback={<EditorErrorFallback model={model} />}>
      <div className="flex h-full w-full flex-row gap-2 overflow-y-auto p-2">
        <textarea
          ref={ref}
          onPasteCapture={e => onPasteCapture(e, ref)}
          value={model}
          className={
            'box-border h-full w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap border border-gray-300 p-2'
          }
          autoFocus={true}
          onChange={onModelChange}
        />
        <ReactMarkdown.Markdown
          style={{
            whiteSpace: 'pre-wrap',
            backgroundColor: 'var(--main-foreground)',
          }}
          className={'h-full w-full overflow-y-auto border-gray-300 p-2'}
          source={model}
        />
      </div>
      <div className="flex w-full flex-row justify-center gap-6">
        <Button onClick={onEditClose} variant={'destructive'}>
          Close
        </Button>
        <Button onClick={onSave}>Save</Button>
      </div>
      <ImageManageDialog />
    </ErrorBoundary>
  );
};

export default Editor;

'use client';

import React from 'react';
import { Button } from '~/components/ui/button';

import MDEditor from '@uiw/react-md-editor';
import { useEditorHook } from '../business/hooks/editor.hooks';

const AddNewEditor = () => {
  const { model, onModelChange, onSave, onEditClose, onPasteCapture } =
    useEditorHook();

  return (
    <>
      <div className="h-full overflow-y-auto">
        <MDEditor
          height={'100%'}
          onPasteCapture={onPasteCapture}
          value={model}
          className={'whitespace-pre'}
          onChange={onModelChange}
        />
      </div>
      <div className="flex w-full flex-row justify-center gap-6">
        <Button onClick={onEditClose} variant={'destructive'}>
          Close
        </Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </>
  );
};

export default AddNewEditor;

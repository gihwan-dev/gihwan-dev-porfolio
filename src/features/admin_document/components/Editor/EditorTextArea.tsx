import React, { useRef } from 'react';
import { useEditorHook } from '../../business/hooks/editor.hooks';

const EditorTextArea = () => {
  const { model, onModelChange, onPasteCapture, isError } = useEditorHook();

  if (isError) {
    throw Error('');
  }

  const ref: React.MutableRefObject<HTMLTextAreaElement | null> = useRef(null);
  return (
    <textarea
      data-testid={'editorTextArea'}
      ref={ref}
      onPasteCapture={e => onPasteCapture(e, ref)}
      value={model}
      className={
        'box-border h-full w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap border border-gray-300 p-2'
      }
      autoFocus={true}
      onChange={onModelChange}
    />
  );
};

export default EditorTextArea;

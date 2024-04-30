import React, { type ReactNode } from 'react';
import { Button } from '~/components/ui/button';
import { useEditorHook } from '../../business/hooks/editor.hooks';

interface Props {
  children: ReactNode;
}

const EditorSaveButton = ({ children }: Props) => {
  const { onSave } = useEditorHook();
  return <Button onClick={onSave}>{children}</Button>;
};

export default EditorSaveButton;

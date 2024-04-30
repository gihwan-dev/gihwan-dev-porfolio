import React, { type FC, type ReactNode } from 'react';
import { Button } from '~/components/ui/button';
import { useEditorHook } from '../../business/hooks/editor.hooks';

interface Props {
  children: ReactNode;
}

const EditorCloseButton: FC<Props> = ({ children }) => {
  const { onEditClose } = useEditorHook();
  return (
    <Button onClick={onEditClose} variant={'destructive'}>
      {children}
    </Button>
  );
};
export default EditorCloseButton;

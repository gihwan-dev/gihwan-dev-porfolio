'use client';

import React, { type FC, type ReactNode } from 'react';
import EditorLoadingSkeleton from './EditorLoadingSkeleton';
import { useEditorHook } from '../../business/hooks/editor.hooks';

interface Props {
  children: ReactNode;
}

const EditorSuspenseBoundary: FC<Props> = ({ children }) => {
  const { isLoading } = useEditorHook();
  if (isLoading) {
    return <EditorLoadingSkeleton />;
  }
  return <>{children}</>;
};

export default EditorSuspenseBoundary;

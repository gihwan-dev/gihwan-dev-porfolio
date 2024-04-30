import React, { type FC, type ReactNode } from 'react';
import EditorErrorFallback from './EditorErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { useEditorHook } from '../../business/hooks/editor.hooks';

interface Props {
  children: ReactNode;
}

export const EditorErrorBoundary: FC<Props> = ({ children }) => {
  const { model } = useEditorHook();
  return (
    <ErrorBoundary fallback={<EditorErrorFallback model={model} />}>
      {children}
    </ErrorBoundary>
  );
};

export default EditorErrorBoundary;

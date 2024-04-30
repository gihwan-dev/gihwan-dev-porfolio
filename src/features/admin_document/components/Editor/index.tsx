import EditorLayout from './EditorLayout';
import { type FC, type ReactNode } from 'react';
import EditorContent from './EditorContent';
import EditorFooter from './EditorFooter';
import EditorMarkdown from './EditorMarkdown';
import EditorTextArea from './EditorTextArea';
import EditorTitle from './EditorTitle';
import EditorCloseButton from './EditorCloseButton';
import EditorErrorBoundary from './EditorErrorBoundary';
import EditorSaveButton from './EditorSaveButton';
import EditorSuspenseBoundary from './EditorSuspenseBoundary';
import ImageManageDialog from './ImageManageDialog';

interface Props {
  children: ReactNode;
}

interface State {
  CloseButton: typeof EditorCloseButton;
  Content: typeof EditorContent;
  ErrorBoundary: typeof EditorErrorBoundary;
  Footer: typeof EditorFooter;
  Layout: typeof EditorLayout;
  Markdown: typeof EditorMarkdown;
  SaveButton: typeof EditorSaveButton;
  SuspenseBoundary: typeof EditorSuspenseBoundary;
  TextArea: typeof EditorTextArea;
  Title: typeof EditorTitle;
  ImageManageDialog: typeof ImageManageDialog;
}

const Editor: FC<Props> & State = ({ children }) => {
  return <EditorLayout>{children}</EditorLayout>;
};

Editor.CloseButton = EditorCloseButton;
Editor.Content = EditorContent;
Editor.ErrorBoundary = EditorErrorBoundary;
Editor.Footer = EditorFooter;
Editor.Layout = EditorLayout;
Editor.Markdown = EditorMarkdown;
Editor.SaveButton = EditorSaveButton;
Editor.SuspenseBoundary = EditorSuspenseBoundary;
Editor.TextArea = EditorTextArea;
Editor.Title = EditorTitle;
Editor.ImageManageDialog = ImageManageDialog;

export default Editor;

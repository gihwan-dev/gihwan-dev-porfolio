import { Editor } from '~/features/admin_document';
import React from 'react';

export const dynamic = 'force-dynamic';

const DocumentEditPage = () => {
  return (
    <Editor.Layout>
      <Editor.Title>Edit document</Editor.Title>
      <Editor.ErrorBoundary>
        <Editor.SuspenseBoundary>
          <Editor.Content>
            <Editor.TextArea />
            <Editor.Markdown />
            <Editor.ImageManageDialog />
          </Editor.Content>
          <Editor.Footer>
            <Editor.CloseButton>Close</Editor.CloseButton>
            <Editor.SaveButton>Save</Editor.SaveButton>
          </Editor.Footer>
        </Editor.SuspenseBoundary>
      </Editor.ErrorBoundary>
    </Editor.Layout>
  );
};

export default DocumentEditPage;

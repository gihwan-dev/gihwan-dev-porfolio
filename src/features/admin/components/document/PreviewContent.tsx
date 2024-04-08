'use client';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import { api } from '~/trpc/react';

type Props = {
  documentId: string;
};

const PreviewContent: React.FC<Props> = ({ documentId }) => {
  const { data, isLoading, isError } = api.document.getDocumentContent.useQuery(
    {
      documentId: Number(documentId),
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <FroalaEditorView model={data?.content ?? ''} config={{}} />;
    </div>
  );
};

export default PreviewContent;

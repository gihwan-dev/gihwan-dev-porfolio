import PreviewDeleteButton from './PreviewDeleteButton';
import PreviewEditButton from './PreviewEditButton';
import React from 'react';

type Props = {
  documentId: string;
};

const PreviewButtonContainer: React.FC<Props> = ({ documentId }) => {
  return (
    <div className={'absolute right-10 top-10 flex flex-row gap-4'}>
      <PreviewEditButton documentId={documentId} />
      <PreviewDeleteButton documentId={documentId} />
    </div>
  );
};

export default PreviewButtonContainer;
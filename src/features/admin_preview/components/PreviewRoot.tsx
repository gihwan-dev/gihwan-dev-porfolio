import React from 'react';

import PreviewTitle from './PreviewTitle';
import PreviewDescription from './PreviewDescription';
import PreviewThumbnail from './PreviewThumbnail';
import PreviewContent from './PreviewContent';
import PreviewDate from './PreviewDate';
import PreviewButtonContainer from './PreviewButtonContainer';
import PreviewTagList from './PreviewTagList';

import { api } from '~/trpc/server';

type Props = {
  documentId: string;
};

const PreviewRoot: React.FC<Props> = async ({ documentId }) => {
  const response = await api.document.getOneDocument.query({
    documentId: +documentId,
  });

  return (
    <div className="relative h-full w-full flex-col items-center overflow-auto bg-main-background py-12">
      <PreviewTitle title={response?.title ?? ''} />
      <PreviewDescription description={response?.description ?? ''} />
      <PreviewThumbnail thumbnail={response?.thumbnail ?? ''} />
      <PreviewContent content={response?.content ?? ''} />
      <PreviewTagList tagList={response?.project_tags ?? []} />
      <PreviewDate date={response?.reg_date ?? new Date()} />
      <PreviewButtonContainer documentId={documentId} />
    </div>
  );
};

export default PreviewRoot;

import React from 'react';

import PreviewTitle from './PreviewTitle';
import PreviewDescription from './PreviewDescription';
import PreviewThumbnail from './PreviewThumbnail';
import PreviewContent from './PreviewContent';
import PreviewDate from './PreviewDate';
import PreviewButtonContainer from './PreviewButtonContainer';
import PreviewTagList from './PreviewTagList';

import { api } from '~/trpc/server';
import PreviewBackButton from './PreviewBackButton';
import PreviewStartEndDate from './PreviewStartEndDate';

type Props = {
  documentId: string;
};

const PreviewRoot: React.FC<Props> = async ({ documentId }) => {
  const response = await api.document.getOneDocument.query({
    documentId: +documentId,
  });

  if (!response) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <div className="relative h-full w-full flex-col items-center overflow-auto bg-main-background pb-24">
      <PreviewTitle title={response.title} />
      <PreviewDescription description={response.description} />
      <PreviewThumbnail thumbnail={response.thumbnail} />
      <PreviewStartEndDate
        startDate={response.start_date.toString()}
        endDate={response.end_date.toString()}
      />
      <PreviewContent content={response.content} />
      <PreviewTagList tagList={response.project_tags} />
      <PreviewDate date={response.reg_date} />
      <PreviewBackButton />
      <PreviewButtonContainer documentId={documentId} />
    </div>
  );
};

export default PreviewRoot;

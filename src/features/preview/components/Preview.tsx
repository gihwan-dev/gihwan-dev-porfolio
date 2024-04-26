import React from 'react';

import PreviewTitle from './PreviewTitle';
import PreviewDescription from './PreviewDescription';
import PreviewThumbnail from './PreviewThumbnail';
import PreviewContent from './PreviewContent';
import PreviewDate from './PreviewDate';
import PreviewActions from './PreviewActions';
import PreviewTagList from './PreviewTagList';

import { api } from '~/trpc/server';
import PreviewBackButton from './PreviewBackButton';
import PreviewStartEndDate from './PreviewStartEndDate';
import PreviewEditButton from './PreviewEditButton';
import PreviewDeleteButton from './PreviewDeleteButton';
import PreviewLayout from './PreviewLayout';

type Props = {
  documentId: string;
};

const Preview: React.FC<Props> = async ({ documentId }) => {
  const response = await api.document.getOneDocument.query({
    documentId: +documentId,
  });

  if (!response) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <PreviewLayout>
      <PreviewTitle>{response.title}</PreviewTitle>
      <PreviewDescription>{response.description}</PreviewDescription>
      <PreviewThumbnail thumbnail={response.thumbnail} />
      <PreviewStartEndDate
        startDate={response.start_date.toString()}
        endDate={response.end_date.toString()}
      />
      <PreviewContent content={response.content} />
      <PreviewTagList tagList={response.project_tags} />
      <PreviewDate date={response.reg_date} />
      <PreviewBackButton />
      <PreviewActions>
        <PreviewEditButton documentId={documentId} />
        <PreviewDeleteButton documentId={documentId} />
      </PreviewActions>
    </PreviewLayout>
  );
};

export default Preview;

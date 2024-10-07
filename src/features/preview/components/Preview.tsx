import React from 'react';

import PreviewDescriptionView from './PreviewDescription/PreviewDescriptionView';
import PreviewPublishedDate from './PreviewPublishedDate/PreviewPublishedDate';
import PreviewActions from './PreviewActions';
import PreviewBackButton from './PreviewBackButton';
import PreviewEditButton from './PreviewEditButton';
import PreviewDeleteButton from './PreviewDeleteButton';
import PreviewLayout from './PreviewLayout';
import PreviewScreenPhoto from './PreviewScreenPhoto';
import PreviewTitle from './PreviewTitle';
import PreviewThumbnail from './PreviewThumbnail';
import PreviewStartEndDate from './PreviewStartEndDate';
import PreviewContent from './PreviewContent';
import PreviewTagList from './PreviewTagList';

import { type DocumentIdProps } from '~/types/document-types';
import { ErrorBoundary } from 'react-error-boundary';

export default function Preview({ documentId }: DocumentIdProps) {
  return (
    <PreviewLayout>
      <PreviewTitle documentId={documentId} />
      <PreviewDescriptionView documentId={documentId} />
      <PreviewThumbnail documentId={documentId} />
      <PreviewStartEndDate documentId={documentId} />
      <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
        <PreviewContent documentId={documentId} />
      </ErrorBoundary>
      <PreviewScreenPhoto documentId={documentId} />
      <PreviewTagList documentId={documentId} />
      <PreviewPublishedDate documentId={documentId} />
      <PreviewBackButton />
      <PreviewActions>
        <PreviewEditButton documentId={documentId} />
        <PreviewDeleteButton documentId={documentId} />
      </PreviewActions>
    </PreviewLayout>
  );
}

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

export default function Preview({ documentId }: DocumentIdProps) {
  return (
    <PreviewLayout>
      <PreviewTitle documentId={documentId} />
      <PreviewDescriptionView documentId={documentId} />
      <PreviewThumbnail documentId={documentId} />
      <PreviewStartEndDate documentId={documentId} />
      <PreviewContent documentId={documentId} />
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

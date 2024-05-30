import SmallTag from '~/components/SmallTag';
import React from 'react';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';

export default async function PreviewTagListView({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentTagList.query({ documentId });

  if (!data) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 text-white xl:px-12">
      <p className={'pb-4 font-bold text-white'}>Tags</p>
      <ul className={'flex w-full flex-row gap-2'}>
        {data.project_tags.map(tag => {
          return (
            <SmallTag
              key={tag.name}
              name={tag.name}
              backgroundColor={tag.background_color}
              textColor={tag.text_color}
            />
          );
        })}
      </ul>
    </div>
  );
}

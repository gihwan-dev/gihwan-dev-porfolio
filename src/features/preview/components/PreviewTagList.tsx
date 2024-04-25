import SmallTag from '~/components/SmallTag';
import { type Document_Tags } from '@prisma/client';
import React from 'react';

type Props = {
  tagList: Document_Tags[];
};

const PreviewTagList: React.FC<Props> = async ({ tagList }) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 text-white lg:px-0">
      <p className={'pb-4 font-bold text-white'}>Tags</p>
      <ul className={'flex w-full flex-row gap-2'}>
        {tagList.map(tag => {
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
};

export default PreviewTagList;

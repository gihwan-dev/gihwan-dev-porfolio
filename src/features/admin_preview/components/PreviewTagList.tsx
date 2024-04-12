import SmallTag from '~/components/SmallTag';
import { type Document_Tags } from '@prisma/client';
import React from 'react';

type Props = {
  tagList: Document_Tags[];
};

const PreviewTagList: React.FC<Props> = async ({ tagList }) => {
  return (
    <div className="mx-auto w-full max-w-4xl text-white">
      <p className={'py-8 font-bold text-white'}>Tags</p>
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
    </div>
  );
};

export default PreviewTagList;

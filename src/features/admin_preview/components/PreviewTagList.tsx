import SmallTag from '~/components/SmallTag';
import { type Document_Tags } from '@prisma/client';
import React from 'react';

type Props = {
  tagList: Document_Tags[];
};

const PreviewTagList: React.FC<Props> = async ({ tagList }) => {
  return (
    <div className="mx-auto w-full max-w-5xl py-8">
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

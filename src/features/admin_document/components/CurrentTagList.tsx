'use client';

import { useParams } from 'next/navigation';
import SmallTag from '~/components/SmallTag';
import { api } from '~/trpc/react';

const CurrentTagList = () => {
  const params = useParams();
  const id = params.id ?? '1';
  const { data, isLoading, isError } = api.document.getCurrentTags.useQuery({
    documentId: Number(id as string),
  });

  if (isLoading || isError || !data) {
    return null;
  }

  return (
    <div>
      <p className="text-sm font-bold">Tag list</p>
      <div className="flex flex-row flex-wrap gap-2">
        {data.project_tags.map(item => (
          <button type="button" key={`${item.document_tag_id}-current-tags`}>
            <SmallTag
              backgroundColor={item.background_color}
              name={item.name}
              textColor={item.text_color}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrentTagList;

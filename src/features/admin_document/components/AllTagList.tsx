import { useParams } from 'next/navigation';
import SmallTag from '~/components/SmallTag';
import { api } from '~/trpc/react';

const AllTagList = () => {
  const params = useParams();
  const id = params.id ?? '1';

  const { data, isLoading, isError } = api.tag.getAll.useQuery();

  const { mutate } = api.document.addTag.useMutation();

  const { refetch } = api.document.getCurrentTags.useQuery({
    documentId: Number(id as string),
  });

  if (isLoading || isError) {
    return <h1>Loading...</h1>;
  }

  const onClick = (tagId: number) => {
    mutate(
      {
        documentId: Number(id as string),
        tagId,
      },
      {
        onSuccess: () => {
          void refetch();
        },
      },
    );
  };

  return (
    <div>
      <p className="text-sm font-bold">All tag list</p>
      <div className="flex flex-row flex-wrap gap-2">
        {data.map(item => {
          return (
            <button
              type="button"
              onClick={onClick.bind(null, item.document_tag_id)}
              key={`${item.document_tag_id}-all-tag-list`}
            >
              <SmallTag
                name={item.name}
                backgroundColor={item.background_color}
                textColor={item.text_color}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AllTagList;

import SmallTag from '~/components/SmallTag';
import { api } from '~/trpc/server';

type Props = {
  documentId: string;
};

const PreviewTagList: React.FC<Props> = async ({ documentId }) => {
  const response = await api.tag.getDocumentTags.query({
    documentId: Number(documentId),
  });

  return (
    <div className="mx-auto w-full max-w-5xl py-8">
      {response.map(tag => {
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

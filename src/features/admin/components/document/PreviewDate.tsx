import { api } from '~/trpc/server';

type Props = {
  documentId: string;
};

const PreviewDate: React.FC<Props> = async ({ documentId }) => {
  const response = await api.document.getDocumentPublishedDate.query({
    documentId: Number(documentId),
  });
  return (
    <div className="mx-auto mt-20 w-full max-w-5xl">
      {response?.reg_date.toUTCString()}
    </div>
  );
};

export default PreviewDate;

import { api } from '~/trpc/server';

type Props = {
  documentId: string;
};

const PreviewDescription: React.FC<Props> = async ({ documentId }) => {
  const response = await api.document.getDocumentDescription.query({
    documentId: Number(documentId),
  });
  return <div className="px-20 py-8 text-center">{response?.description}</div>;
};

export default PreviewDescription;

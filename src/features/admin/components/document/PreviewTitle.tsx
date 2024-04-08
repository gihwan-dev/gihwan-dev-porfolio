import { api } from '~/trpc/server';
type Props = {
  documentId: string;
};

const PreviewTitle: React.FC<Props> = async ({ documentId }) => {
  const response = await api.document.getDocumentTitle.query({
    documentId: Number(documentId),
  });

  return <h1 className="text-center">{response?.title}</h1>;
};

export default PreviewTitle;

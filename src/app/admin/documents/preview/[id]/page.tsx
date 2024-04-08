import { PreviewRoot } from '~/features/admin_preview';

type Props = {
  params: {
    id: string;
  };
};

const DocumentsPreviewPage = ({ params }: Props) => {
  const { id } = params;
  return <PreviewRoot documentId={id} />;
};

export default DocumentsPreviewPage;

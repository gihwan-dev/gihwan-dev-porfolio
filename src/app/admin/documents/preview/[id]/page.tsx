import { type ParamsProps } from '~/app/types/params.type';
import { PreviewRoot } from '~/features/admin_preview';

const DocumentsPreviewPage: React.FC<ParamsProps> = ({ params }) => {
  const { id } = params;
  return <PreviewRoot documentId={id} />;
};

export default DocumentsPreviewPage;

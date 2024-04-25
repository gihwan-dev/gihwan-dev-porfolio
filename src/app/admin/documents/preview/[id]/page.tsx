import { type ParamsProps } from '~/app/types/params.type';
import { PreviewRoot } from 'src/features/preview';

export const dynamic = 'force-dynamic';

const DocumentsPreviewPage: React.FC<ParamsProps> = ({ params }) => {
  const { id } = params;
  return <PreviewRoot documentId={id} />;
};

export default DocumentsPreviewPage;

import { type ParamsProps } from '~/types/params-type';
import { Preview } from '~/features/preview';
import { type FC } from 'react';

export const dynamic = 'force-dynamic';

const DocumentsPreviewPage: FC<ParamsProps> = ({ params }) => {
  const { id } = params;
  return <Preview documentId={+id} />;
};

export default DocumentsPreviewPage;

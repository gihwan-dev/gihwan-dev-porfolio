import { type FC } from 'react';

import { CompleteEditRoot } from '~/features/admin_document';

import { type ParamsProps } from '~/types/params-type';

export const dynamic = 'force-dynamic';

const EditSavePage: FC<ParamsProps> = ({ params }) => {
  return <CompleteEditRoot documentId={+params.id} />;
};

export default EditSavePage;

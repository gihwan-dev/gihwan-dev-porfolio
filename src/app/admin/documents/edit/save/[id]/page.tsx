import { type ParamsProps } from '~/app/types/params.type';
import { CompleteEditRoot } from '~/features/admin_document';

const EditSavePage: React.FC<ParamsProps> = ({ params }) => {
  return <CompleteEditRoot documentId={+params.id} />;
};

export default EditSavePage;

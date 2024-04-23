import { api } from '~/trpc/server';
import CompleteEditForm from './CompleteEditForm';
import CompleteEditTitle from './CompleteEditTitle';

const CompleteEditRoot: React.FC<{
  documentId: number;
}> = async ({ documentId }) => {
  const document = await api.document.getOneDocument.query({
    documentId,
  });

  const typeList = await api.document.getAllType.query();

  if (!document || !typeList) {
    throw Error('페이지가 존재하지 않습니다.');
  }

  const formatedTypeList = typeList.map(type => type.document_type_name);

  return (
    <main className="flex w-full flex-col items-center gap-6 overflow-y-auto px-12 py-12">
      <CompleteEditTitle />
      <CompleteEditForm
        title={document.title}
        description={document.description}
        documentId={documentId}
        thumbnail={document.thumbnail}
        startDate={document.start_date}
        endDate={document.end_date}
        documentTypeName={document.document_type.document_type_name}
        typeList={formatedTypeList}
      />
    </main>
  );
};

export default CompleteEditRoot;

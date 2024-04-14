import { api } from '~/trpc/server';
import CompleteEditForm from './CompleteEditForm';
import CompleteEditTitle from './CompleteEditTitle';

const CompleteEditRoot: React.FC<{
  documentId: number;
}> = async ({ documentId }) => {
  const document = await api.document.getOneDocument.query({
    documentId,
  });

  if (!document) {
    // TODO: 공용 에러 페이지 만들어서 보이기. 스토리북 도입 고려 해보기.
    return;
  }

  return (
    <main className="flex w-full flex-col items-center gap-6 overflow-y-auto px-12 py-12">
      <CompleteEditTitle />
      <CompleteEditForm
        title={document.title}
        description={document.description}
        documentId={documentId}
        thumbnail={document.thumbnail}
      />
    </main>
  );
};

export default CompleteEditRoot;

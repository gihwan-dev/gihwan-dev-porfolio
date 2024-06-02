import { AddNewRoot, EditorStoreProvider } from '~/features/admin_document';

export const dynamic = 'force-dynamic';

const DocumentEditPage = () => {
  return (
    <EditorStoreProvider>
      <AddNewRoot />
    </EditorStoreProvider>
  );
};

export default DocumentEditPage;

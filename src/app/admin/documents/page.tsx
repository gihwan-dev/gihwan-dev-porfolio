import { EditDocumentRoot } from '~/features/admin_document';

export const dynamic = 'force-dynamic';

const AdminProjectsPage = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <EditDocumentRoot />
    </main>
  );
};

export default AdminProjectsPage;

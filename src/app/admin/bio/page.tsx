import { api } from '~/trpc/server';
import { BioForm } from '~/features/admin_bio';

const AdminBioPage = async () => {
  const data = await api.bio.getBio.query();

  return (
    <div className="h-full w-full flex-col gap-12 overflow-auto py-12">
      <h1 className="text-center text-3xl font-bold">Edit Bio</h1>
      <BioForm data={data} />
    </div>
  );
};

export default AdminBioPage;

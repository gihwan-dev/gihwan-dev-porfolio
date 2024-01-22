import BioForm from '~/features/admin/features/bio/components/BioForm';
import { api } from '~/trpc/server';

const AdminBioPage = async () => {
  const data = await api.bio.getBio.query();

  return (
    <div className="w-full h-full py-12 overflow-auto flex-col gap-12">
      <h1 className="text-3xl font-bold text-center">Edit Bio</h1>
      <BioForm data={data} />
    </div>
  );
};

export default AdminBioPage;

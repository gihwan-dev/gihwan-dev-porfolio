import { BioForm } from '~/features/admin_bio';
import { findBio } from '~/server/query/bio';

export const dynamic = 'force-dynamic';

const AdminBioPage = async () => {
  const data = await findBio();

  return (
    <div className="flex w-full flex-col items-center gap-12 overflow-auto py-12">
      <h1 className="text-center text-3xl font-bold text-white">Edit Bio</h1>
      <BioForm data={data} />
    </div>
  );
};

export default AdminBioPage;

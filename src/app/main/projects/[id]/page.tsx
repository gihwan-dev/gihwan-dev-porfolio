import { PreviewRoot } from '~/features/admin_preview';
import { type ParamsProps } from '~/app/types/params.type';

export const dynamic = 'force-dynamic';

export default function ProjectDetailPage({ params }: ParamsProps) {
  const { id } = params;
  return (
    <div>
      <PreviewRoot documentId={id} />
    </div>
  );
}

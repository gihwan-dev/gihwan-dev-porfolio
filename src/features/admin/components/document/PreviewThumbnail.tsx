import Image from 'next/image';
import { api } from '~/trpc/server';

type Props = {
  documentId: string;
};

const PreviewThumbnail: React.FC<Props> = async ({ documentId }: Props) => {
  const response = await api.document.getDocumentThumbnail.query({
    documentId: Number(documentId),
  });

  return response?.thumbnail ? (
    <div className="mx-auto aspect-video w-full max-w-7xl bg-gray-200">
      <Image
        fill={true}
        objectFit="cover"
        src={response?.thumbnail}
        alt="document thumbnail"
      />
    </div>
  ) : (
    <h2>No Image</h2>
  );
};

export default PreviewThumbnail;

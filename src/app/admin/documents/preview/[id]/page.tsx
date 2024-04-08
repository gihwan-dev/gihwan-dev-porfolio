import PreviewContent from '~/features/admin/components/document/PreviewContent';
import PreviewDate from '~/features/admin/components/document/PreviewDate';
import PreviewDescription from '~/features/admin/components/document/PreviewDescription';
import PreviewTagList from '~/features/admin/components/document/PreviewTagList';
import PreviewThumbnail from '~/features/admin/components/document/PreviewThumbnail';
import PreviewTitle from '~/features/admin/components/document/PreviewTitle';

type Props = {
  params: {
    id: string;
  };
};

const DocumentsPreviewPage = ({ params }: Props) => {
  const { id } = params;
  return (
    <div className="h-full w-full flex-col items-center overflow-auto py-12">
      <PreviewTitle documentId={id} />
      <PreviewDescription documentId={id} />
      <PreviewThumbnail documentId={id} />
      <PreviewContent documentId={id} />
      <PreviewDate documentId={id} />
      <PreviewTagList documentId={id} />
    </div>
  );
};

export default DocumentsPreviewPage;

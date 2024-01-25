import DocumentListContainer from './DocumentListContainer';
import DocumentPageNation from './DocumentPagenation';
import EditDocumentSelection from './EditDocumentSelection';
import EditDocumentTitle from './EditDocumentTitle';

const EditDocumentRoot = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-6 px-12 py-12">
      <EditDocumentTitle />
      <EditDocumentSelection />
      <DocumentListContainer />
      <DocumentPageNation />
    </div>
  );
};

export default EditDocumentRoot;

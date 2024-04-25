import DocumentDataTableContainer from './DocumentDataTableContainer';
import DocumentDataTablePagination from './DocumentDataTablePagination';
import DocumentTypeSelector from './DocumentTypeSelector';
import ManageDocumentTitle from './ManageDocumentTitle';
import DocumentDataTableHeader from './DocumentDataTableHeader';
import DocumentDataTable from './DocumentDataTable';

const ManageDocumentRoot = () => {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-6 px-12 py-12">
      <ManageDocumentTitle />
      <DocumentTypeSelector />
      <DocumentDataTableContainer>
        <DocumentDataTableHeader />
        <DocumentDataTable />
      </DocumentDataTableContainer>
      <DocumentDataTablePagination />
    </div>
  );
};

export default ManageDocumentRoot;

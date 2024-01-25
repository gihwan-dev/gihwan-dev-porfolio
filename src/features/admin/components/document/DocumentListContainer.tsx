import { Card, CardContent } from '~/components/ui/card';
import DocumentContainerHeader from './DocumentContainerHeader';
import DocumentDataTable from './DocumentDataTable';

const DocumentListContainer = () => {
  return (
    <Card>
      <CardContent>
        <DocumentContainerHeader />
        <DocumentDataTable />
      </CardContent>
    </Card>
  );
};

export default DocumentListContainer;

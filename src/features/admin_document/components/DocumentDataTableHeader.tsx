'use client';

import { useSearchParams } from 'next/navigation';
import { CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import AddNewDocumentButton from './AddNewDocumentButton';

const DocumentDataTableHeader = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') ?? 'projects';

  return (
    <CardHeader>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-3">
          <CardTitle>{type.toUpperCase()}</CardTitle>
          <CardDescription>
            See list of {type} and edit or remove.
          </CardDescription>
        </div>
        <AddNewDocumentButton />
      </div>
    </CardHeader>
  );
};

export default DocumentDataTableHeader;

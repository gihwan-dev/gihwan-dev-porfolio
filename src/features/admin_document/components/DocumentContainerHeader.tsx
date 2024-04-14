'use client';

import { useSearchParams } from 'next/navigation';
import { CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import DocumentAddButton from './DocumentAddButton';

const DocumentContainerHeader = () => {
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
        <DocumentAddButton />
      </div>
    </CardHeader>
  );
};

export default DocumentContainerHeader;

'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Skeleton } from '~/components/ui/skeleton';
import { api } from '~/trpc/react';

const DocumentTypeSelector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const curParam = searchParams.get('type');

  const { data: typeList, isLoading } = api.document.getAllType.useQuery();

  if (isLoading) {
    return (
      <div className="flex flex-row justify-end">
        <Skeleton className="h-[40px] w-[180px]" />
      </div>
    );
  }

  const selectionHandler = (value: string) => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('type', value);
    router.push(pathname + '?' + newSearchParams.toString());
  };

  return (
    <div className="flex flex-row justify-end">
      <Select
        value={curParam ?? 'projects'}
        onValueChange={selectionHandler}
        defaultValue={curParam ?? 'projects'}
      >
        <SelectTrigger type={'button'} className="w-[180px]">
          <SelectValue placeholder="type" />
        </SelectTrigger>
        <SelectContent>
          {typeList?.map(type => (
            <SelectItem
              key={`${type.document_type_id}-admin-selection`}
              value={type.document_type_name}
            >
              {type.document_type_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DocumentTypeSelector;

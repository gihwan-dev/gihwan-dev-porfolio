'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Pagination } from '~/components/ui/pagination';
import { api } from '~/trpc/react';

const DocumentPageNation = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = searchParams.get('page');

  const { data: count, isLoading, isError } = api.document.countAll.useQuery();

  useEffect(() => {
    if (!page) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('page', '1');
      const newPathName = pathname + '?' + newSearchParams.toString();
      router.push(newPathName);
    }
  });

  if (isLoading || isError) {
    return null;
  }

  return <Pagination></Pagination>;
};

export default DocumentPageNation;

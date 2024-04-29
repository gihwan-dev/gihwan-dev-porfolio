'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination';
import { api } from '~/trpc/react';
import {
  getPageNationItemAmount,
  getPageNumber,
  getPageUrl,
} from '../../admin/utils/pagination.utils';

const DocumentDataTablePagination = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { data: count, isLoading, isError } = api.document.countAll.useQuery();

  const page = searchParams.get('page');

  useLayoutEffect(() => {
    if (!page) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('page', '1');
      const newPathName = pathname + '?' + newSearchParams.toString();
      router.push(newPathName);
    }
  }, [page, searchParams, pathname, router]);

  if (!page || !count) {
    return null;
  }

  if (isLoading || isError) {
    return null;
  }
  // TODO: 페이지 네이션 아이템 생성의 인덱스는 0, 1, 2 이다. 이걸 상수 map 으로 관리하자.
  return (
    <Pagination>
      <PaginationContent>
        {page === '1' ? null : (
          <PaginationItem>
            <PaginationPrevious
              href={getPageUrl({
                page: getPageNumber(Number(page), 0),
                pathname,
                searchParams,
              })}
            />
          </PaginationItem>
        )}
        {Array.from({
          length: getPageNationItemAmount(count),
        }).map((_, index) => {
          return (
            <PaginationItem key={`${index}-pagination-item`}>
              <PaginationLink
                isActive={getPageNumber(+page, index) === +page}
                href={getPageUrl({
                  page: getPageNumber(+page, index),
                  pathname,
                  searchParams,
                })}
              >
                {getPageNumber(+page, index)}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {count < 10 * (+page + 1) ? null : (
          <PaginationItem>
            <PaginationNext
              href={getPageUrl({
                page: getPageNumber(Number(page), 2),
                pathname,
                searchParams,
              })}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default DocumentDataTablePagination;

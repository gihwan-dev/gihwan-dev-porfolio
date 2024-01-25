'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination';
import { api } from '~/trpc/react';
import {
  controlPaginationState,
  getPageNumbers,
  getPageUrl,
} from '../../utils/document.utils';

const DocumentPagiNation = () => {
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

  // TODO: Math.ceil(count / 10 ?? 1) 로 getPageNumbers 파라미터 대체 해야함.
  // TODO: 최대 페이지 수 구해서 그 이상 넘어가지 않도록 하는 로직 구현해야 함.
  return (
    <Pagination>
      <PaginationContent>
        {page === '1' ? null : (
          <PaginationItem>
            <PaginationPrevious
              href={getPageUrl({
                page: controlPaginationState(Number(page ?? 1)),
                pathname,
                searchParams,
              })}
            />
          </PaginationItem>
        )}
        {Array.from({ length: getPageNumbers(10) }).map((_, index) => {
          return (
            <PaginationItem key={`${index}-pagination-item`}>
              <PaginationLink
                isActive={
                  controlPaginationState(Number(page ?? 1)) + index ===
                  Number(page ?? 1)
                }
                href={getPageUrl({
                  page: controlPaginationState(Number(page ?? 1)) + index,
                  pathname,
                  searchParams,
                })}
              >
                {controlPaginationState(Number(page ?? 1)) + index}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={getPageUrl({
              page: controlPaginationState(Number(page ?? 1)) + 2,
              pathname,
              searchParams,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default DocumentPagiNation;

'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
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
        {Array.from({
          length: getPageNumbers(
            Math.ceil(count / 10) === 0 ? 1 : Math.ceil(count / 10),
          ),
        }).map((_, index) => {
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
        {!count || count < 10 * (Number(page ?? 1) + 1) ? null : (
          <PaginationItem>
            <PaginationNext
              href={getPageUrl({
                page: controlPaginationState(Number(page ?? 1)) + 1,
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

export default DocumentPagiNation;

import { type ReadonlyURLSearchParams } from 'next/navigation';

type GetPageParamsType = {
  searchParams: ReadonlyURLSearchParams;
  pathname: string;
  page: number;
};

export const getPageUrl = ({
  searchParams,
  pathname,
  page,
}: GetPageParamsType): string => {
  const newSearchParams = new URLSearchParams(searchParams.toString());
  newSearchParams.set('page', String(page));
  const newURL = pathname + '?' + newSearchParams.toString();

  return newURL;
};

export const getPageNumbers = (length: number) => {
  return length > 3 ? 3 : length;
};

export const controlPaginationState = (page: number) => {
  if (page === 1) {
    return page;
  }
  return page - 1;
};

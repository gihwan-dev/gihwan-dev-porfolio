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
  return pathname + '?' + newSearchParams.toString();
};

export const getPageNationItemAmount = (count: number) => {
  const onePageAmount = 10;
  const length = Math.ceil(count / onePageAmount);

  if (length === 0) {
    return 1;
  }

  return length > 3 ? 3 : length;
};

export const getPageNumber = (page: number, index: number) => {
  if (page === 1) {
    return page + index;
  }
  return page + index - 1;
};

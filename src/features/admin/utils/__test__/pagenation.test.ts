import { describe, expect, it } from 'vitest';
import { getPageNationItemAmount, getPageNumber } from '../pagination.utils';

describe('페이지네이션 숫자의 갯수를 반환하는 유틸리티 함수 테스트', () => {
  it('데이터의 총 갯수가 0개 라면 1개의 페이지네이션이 존재해야 한다.', () => {
    const count = 0;
    expect(getPageNationItemAmount(count)).toBe(1);
  });
  it('데이터의 총 갯수가 10개 라면 1개의 페이지네이션이 존재해야 한다.', () => {
    const count = 10;
    expect(getPageNationItemAmount(count)).toBe(1);
  });
  it('데이터의 총 갯수가 11개 라면 2개의 페이지네이션이 존재해야 한다.', () => {
    const count = 11;
    expect(getPageNationItemAmount(count)).toBe(2);
  });
  it('데이터의 총 갯수가 20개 라면 2개의 페이지네이션이 존재해야 한다.', () => {
    const count = 20;
    expect(getPageNationItemAmount(count)).toBe(2);
  });
  it('데이터의 총 갯수가 21개라면 3개의 페이지네이션이 존재해야 한다.', () => {
    const count = 21;
    expect(getPageNationItemAmount(count)).toBe(3);
  });
  it('데이터의 총 갯수가 30개라면 3개의 페이지네이션이 존재해야 한다.', () => {
    const count = 30;
    expect(getPageNationItemAmount(count)).toBe(3);
  });
  it('데이터의 총 갯수가 31개 이상일 때 부턴 3개의 페이지네이션이 존재해야 한다.', () => {
    const count = 31;
    expect(getPageNationItemAmount(count)).toBe(3);
  });
});

describe('페이지네이션의 숫자를 반환하는 유틸리티 함수 테스트', () => {
  const indexArr = [0, 1, 2];
  it('페이지가 1인 경우 1, 2, 3의 페이지 숫자가 반환되어야 한다.', () => {
    const page = 1;
    const result = indexArr.map(item => getPageNumber(page, item));
    expect(result).toEqual([1, 2, 3]);
  });
  it('페이지가 2인 경우 1, 2, 3의 페이지 숫자가 반환되어야 한다.', () => {
    const page = 2;
    const result = indexArr.map(item => getPageNumber(page, item));
    expect(result).toEqual([1, 2, 3]);
  });
  it('페이지가 3인 경우 2, 3, 4의 페이지 숫자가 반환되어야 한다.', () => {
    const page = 3;
    const result = indexArr.map(item => getPageNumber(page, item));
    expect(result).toEqual([2, 3, 4]);
  });
});

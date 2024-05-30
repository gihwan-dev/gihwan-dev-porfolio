import { describe, expect, it } from 'vitest';
import { formattingDate } from '../date-utils';

describe('date-utils', () => {
  it('formattingDate', () => {
    const date = '2021-08-01T00:00:00.000Z';

    const formattedDate = formattingDate(date);

    expect(formattedDate).toBe('2021년 8월 1일');
  });
});

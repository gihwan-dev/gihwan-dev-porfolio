import { formattingDate } from '~/utils/date-utils';
import { type DocumentIdProps } from '~/types/document-types';
import { api } from '~/trpc/server';

export default async function PreviewStartEndDateView({
  documentId,
}: DocumentIdProps) {
  const data = await api.document.getDocumentStartEndDate.query({
    documentId: +documentId,
  });

  if (!data) {
    throw Error('존재하지 않는 페이지 입니다.');
  }

  return (
    <div className={'pb-8 text-center font-bold text-white'}>
      프로젝트 기간: {formattingDate(data.start_date.toString())} ~{' '}
      {formattingDate(data.end_date.toString())}
    </div>
  );
}

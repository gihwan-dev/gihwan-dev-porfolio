import { formattingDate } from '~/utils/date.utils';

interface Props {
  startDate: string;
  endDate: string;
}

const PreviewStartEndDate: React.FC<Props> = ({ startDate, endDate }) => {
  return (
    <div className={'pb-8 text-center font-bold text-white'}>
      프로젝트 기간: {formattingDate(startDate)} ~ {formattingDate(endDate)}
    </div>
  );
};

export default PreviewStartEndDate;

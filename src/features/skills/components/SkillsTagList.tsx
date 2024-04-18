import BigTag from '~/components/BigTag';
import FadeInWrapper from '~/components/FadeInWrapper';
import { type SkillsContentProps } from '../types';

const SkillsTagList: React.FC<SkillsContentProps> = ({ tags }) => {
  return (
    <FadeInWrapper>
      <div
        style={{
          height: 350,
        }}
        className={
          'flex w-full flex-row flex-wrap items-center justify-center gap-4'
        }
      >
        {tags.map(tag => (
          <div
            className={'flex flex-col items-center gap-2'}
            key={tag.name + 'skills tag List'}
          >
            <BigTag
              name={tag.name}
              backgroundColor={tag.background_color}
              textColor={tag.text_color}
            />
            <p className={'text-center text-sm font-bold text-white'}>
              {tag._count.Documents}회 사용
            </p>
          </div>
        ))}
      </div>
    </FadeInWrapper>
  );
};

export default SkillsTagList;

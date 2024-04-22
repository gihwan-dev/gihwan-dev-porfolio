import { type SkillsContentProps } from '../types';
import SkillsChartBar from './SkillsChartBar';

const SkillsTagGraph: React.FC<SkillsContentProps> = ({ tags }) => {
  const maxHeight = 350;
  const sum = tags.reduce((prev, cur) => {
    return prev + cur._count.Documents;
  }, 0);
  const eachHeight = maxHeight / sum;
  return (
    <div
      style={{
        height: maxHeight,
      }}
      className={'flex w-full flex-row items-end gap-4 overflow-x-auto px-4'}
    >
      {tags.map(tag => (
        <SkillsChartBar
          key={tag.name + tag.document_tag_id + 'SkillTagGraph'}
          eachHeight={eachHeight}
          tag={tag}
        />
      ))}
    </div>
  );
};

export default SkillsTagGraph;

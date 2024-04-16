import { type Document_Tags } from '@prisma/client';
import SmallTag from '~/components/SmallTag';

interface Props {
  tags: Document_Tags[];
  onClick: () => void;
}

const ProjectCarouselTechTagList: React.FC<Props> = ({ tags, onClick }) => {
  return (
    <div
      className={
        'absolute bottom-10 left-1/2 z-20 flex w-11/12 -translate-x-1/2 flex-row flex-wrap items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-3 shadow'
      }
    >
      {tags.map(tag => (
        <SmallTag
          key={tag.document_type_id + tag.name + 'carousel tag list'}
          name={tag.name}
          backgroundColor={tag.background_color}
          textColor={tag.text_color}
        />
      ))}
      <button
        className={
          'absolute right-2 top-0 text-xl text-gray-400 transition-all hover:scale-105 hover:text-gray-900'
        }
        onClick={onClick}
      >
        x
      </button>
    </div>
  );
};

export default ProjectCarouselTechTagList;

import Image from 'next/image';
import { isImageSrcTruthy } from '~/lib/truthy';

interface Props {
  src: string;
}

const ProjectsOverviewImage: React.FC<Props> = ({ src }) => {
  return (
    <div
      className={
        'flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gray-300'
      }
    >
      {isImageSrcTruthy(src) ? (
        <Image
          src={src}
          fill
          className="object-cover"
          alt={'Project overview image'}
        />
      ) : (
        <p className={'text-gray-500'}>No thumbnail</p>
      )}
    </div>
  );
};

export default ProjectsOverviewImage;

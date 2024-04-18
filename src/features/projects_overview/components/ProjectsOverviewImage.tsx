import Image from 'next/image';
import { isImageSrcTruthy } from '~/lib/truthy';

interface Props {
  src: string;
}

const ProjectsOverviewImage: React.FC<Props> = ({ src }) => {
  return (
    <div className={'aspect-square w-52 bg-gray-300'}>
      {isImageSrcTruthy(src) ? (
        <Image
          src={src}
          fill
          className="object-cover"
          alt={'Project overview image'}
        />
      ) : null}
    </div>
  );
};

export default ProjectsOverviewImage;

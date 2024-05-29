import Image from 'next/image';
import { api } from '~/trpc/server';

const BioImage = async () => {
  const bioImage = await api.bio.getBioImage.query();

  if (!bioImage) {
    return (
      <div
        className={
          'relative flex h-[475] w-[374] items-center justify-center overflow-hidden bg-muted-foreground sm:rounded-lg'
        }
      >
        <h2>이미지를 불러올 수 없습니다...</h2>
      </div>
    );
  }

  return (
    <div
      className={
        'relative h-[475px] w-[374px] overflow-hidden bg-muted-foreground sm:rounded-lg'
      }
    >
      <Image
        fill
        sizes={'374'}
        priority={true}
        className={'object-cover'}
        src={bioImage.bio_img}
        alt="my image"
      />
    </div>
  );
};

export default BioImage;

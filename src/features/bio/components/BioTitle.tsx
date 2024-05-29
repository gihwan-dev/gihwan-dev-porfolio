import { api } from '~/trpc/server';

const BioTitle = async () => {
  const bio = await api.bio.getBioTitle.query();

  if (!bio) {
    return (
      <h1
        className={
          'w-full max-w-[29rem] break-keep text-center text-4xl text-white sm:text-5xl'
        }
      >
        오류가 발생했습니다... 다시 시도해 주세요!
      </h1>
    );
  }
  return (
    <h1
      className={
        'w-full max-w-[29rem] break-keep text-center text-4xl text-white sm:text-5xl'
      }
    >
      {bio.title}
    </h1>
  );
};

export default BioTitle;

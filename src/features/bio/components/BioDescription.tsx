import { api } from '~/trpc/server';

const BioDescription = async () => {
  const description = await api.bio.getBioDescription.query();

  if (!description) {
    return (
      <p className="w-full max-w-[29rem] break-keep text-center text-lg text-text-gray sm:text-xl">
        오류가 발생했습니다... 다시 시도해 주세요!
      </p>
    );
  }
  return (
    <p className="w-full max-w-[29rem] break-keep text-center text-lg text-text-gray sm:text-xl">
      {description.description}
    </p>
  );
};

export default BioDescription;

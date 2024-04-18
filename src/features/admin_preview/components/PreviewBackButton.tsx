'use client';

import { useRouter } from 'next/navigation';

const PreviewBackButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <div className="flex w-full flex-row items-center justify-center py-8">
      <button onClick={onClick} className="font-bold text-white">
        {'<'} Back
      </button>
    </div>
  );
};

export default PreviewBackButton;

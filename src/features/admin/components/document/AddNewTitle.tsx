'use client';

import { useSearchParams } from 'next/navigation';

const AddNewTitle = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') ?? 'projects';

  return <h1 className="text-center text-xl">Add new {type}.</h1>;
};

export default AddNewTitle;

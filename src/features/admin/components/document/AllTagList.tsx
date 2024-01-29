import { api } from '~/trpc/react';

const AllTagList = () => {
  const { data, isLoading, isError } = api.tag.getAll.useQuery();

  if (isLoading || isError) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p className="text-sm font-bold">All tag list</p>
      <div>
        {/**
         * // TODO: all tag list
         */}
      </div>
    </div>
  );
};

export default AllTagList;

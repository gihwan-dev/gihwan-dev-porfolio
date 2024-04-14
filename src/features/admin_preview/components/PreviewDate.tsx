import React from 'react';

type Props = {
  date: Date;
};

const PreviewDate: React.FC<Props> = async ({ date }) => {
  return (
    <div className="mx-auto w-full max-w-4xl text-sm text-white">
      {date.toDateString()}
    </div>
  );
};

export default PreviewDate;

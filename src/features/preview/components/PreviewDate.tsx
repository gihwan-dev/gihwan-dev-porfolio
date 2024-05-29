import React from 'react';

type Props = {
  date: Date;
};

const PreviewDate: React.FC<Props> = async ({ date }) => {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 text-sm text-gray-300 xl:px-12">
      Published At: <strong>{date.toDateString()}</strong>
    </div>
  );
};

export default PreviewDate;

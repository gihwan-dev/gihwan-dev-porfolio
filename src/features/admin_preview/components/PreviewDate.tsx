import React from 'react';

type Props = {
  date: Date;
};

const PreviewDate: React.FC<Props> = async ({ date }) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 text-sm text-gray-300 lg:px-0">
      Published At: <strong>{date.toDateString()}</strong>
    </div>
  );
};

export default PreviewDate;

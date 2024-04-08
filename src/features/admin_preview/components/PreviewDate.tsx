import React from 'react';

type Props = {
  date: Date;
};

const PreviewDate: React.FC<Props> = async ({ date }) => {
  return (
    <div className="mx-auto mt-20 w-full max-w-5xl">{date.toDateString()}</div>
  );
};

export default PreviewDate;

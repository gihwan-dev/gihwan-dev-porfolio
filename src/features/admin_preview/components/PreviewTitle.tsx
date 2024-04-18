import React from 'react';

type Props = {
  title: string;
};

const PreviewTitle: React.FC<Props> = async ({ title }) => {
  return (
    <h1 className="pb-4 pt-24 text-center text-4xl text-white">{title}</h1>
  );
};

export default PreviewTitle;

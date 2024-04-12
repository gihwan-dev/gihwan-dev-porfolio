import React from 'react';

type Props = {
  title: string;
};

const PreviewTitle: React.FC<Props> = async ({ title }) => {
  return <h1 className="mt-28 text-center text-4xl text-white">{title}</h1>;
};

export default PreviewTitle;

import React from 'react';

type Props = {
  title: string;
};

const PreviewTitle: React.FC<Props> = async ({ title }) => {
  return <h1 className="text-center">{title}</h1>;
};

export default PreviewTitle;

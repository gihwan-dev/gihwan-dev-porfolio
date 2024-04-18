import React from 'react';

type Props = {
  description: string;
};

const PreviewDescription: React.FC<Props> = async ({ description }) => {
  return <div className="text-center text-lg text-gray-400">{description}</div>;
};

export default PreviewDescription;

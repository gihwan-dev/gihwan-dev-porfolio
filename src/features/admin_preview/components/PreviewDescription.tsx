import React from 'react';

type Props = {
  description: string;
};

const PreviewDescription: React.FC<Props> = async ({ description }) => {
  return <div className="px-20 py-8 text-center text-white">{description}</div>;
};

export default PreviewDescription;

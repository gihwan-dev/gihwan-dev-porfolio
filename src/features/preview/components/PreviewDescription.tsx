import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PreviewDescription: React.FC<Props> = async ({ children }) => {
  return (
    <div className="px-4 text-center text-lg text-gray-400">{children}</div>
  );
};

export default PreviewDescription;

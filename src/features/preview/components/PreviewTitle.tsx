import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PreviewTitle: React.FC<Props> = async ({ children }) => {
  return (
    <h1 className="pb-4 pt-24 text-center text-4xl text-white">{children}</h1>
  );
};

export default PreviewTitle;

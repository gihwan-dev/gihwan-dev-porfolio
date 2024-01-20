import React from 'react';

const MainPageLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainPageLayout;

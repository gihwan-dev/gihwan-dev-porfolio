import { type FC, type ReactNode } from 'react';

const Container: FC<{
  children: ReactNode;
  className: string;
}> = ({ children, className }) => {
  return <div className={'main-container ' + className}>{children}</div>;
};

export default Container;

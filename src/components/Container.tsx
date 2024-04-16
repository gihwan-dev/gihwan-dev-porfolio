import { type FC, type ReactNode } from 'react';
import { cn } from '~/lib/utils';

const Container: FC<{
  children: ReactNode;
  className: string;
}> = ({ children, className }) => {
  return <div className={cn('main-container', className)}>{children}</div>;
};

export default Container;

import { cn } from '~/lib/utils';
import { type ChildrenProps } from '~/types/props-types';

interface ContainerProps extends ChildrenProps {
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto max-w-7xl', className)}>
      {children}
    </div>
  );
}

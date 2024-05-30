import { cn } from '~/lib/utils';
import { type ChildrenProps } from '~/types/props-types';

interface SectionProps extends ChildrenProps {
  id: string;
  foreground?: boolean;
  className?: string;
}

export default function Section({
  children,
  id,
  foreground = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section px-8 py-16 xl:px-16 xl:py-24',
        foreground ? 'bg-main-foreground' : '',
        className,
      )}
    >
      {children}
    </section>
  );
}

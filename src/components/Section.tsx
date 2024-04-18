import { type FC, type ReactNode } from 'react';

const Section: FC<{
  children: ReactNode;
  id: string;
  foreground?: boolean;
  className?: string;
}> = ({ children, id, foreground = false, className }) => {
  return (
    <section
      id={id}
      className={
        `main-section ${foreground ? 'bg-main-foreground' : ''} ` + className
      }
    >
      {children}
    </section>
  );
};

export default Section;

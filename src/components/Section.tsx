import { type FC, type ReactNode } from 'react';

const Section: FC<{
  children: ReactNode;
  id: string;
  foreground?: boolean;
}> = ({ children, id, foreground = false }) => {
  return (
    <section
      id={id}
      className={`main-section ${foreground ? 'bg-main-foreground' : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;

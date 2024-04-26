import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SkillsTagView: FC<Props> = ({ children }) => {
  return (
    <div
      className={
        'flex w-full flex-col items-center rounded-lg bg-main-foreground px-3 pb-8 pt-12'
      }
    >
      {children}
    </div>
  );
};

export default SkillsTagView;

import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SkillsTagView: FC<Props> = ({ children }) => {
  return (
    <div
      className={
        'flex w-full flex-row items-center justify-center gap-4 rounded-lg px-3 pb-8 pt-12'
      }
    >
      {children}
    </div>
  );
};

export default SkillsTagView;

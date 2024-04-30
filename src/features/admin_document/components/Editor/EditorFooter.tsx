import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const EditorFooter: FC<Props> = ({ children }) => {
  return (
    <div className="flex w-full flex-row justify-center gap-6">{children}</div>
  );
};

export default EditorFooter;

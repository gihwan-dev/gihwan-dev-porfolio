import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const EditorContent: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-row gap-2 overflow-y-auto p-2">
      {children}
    </div>
  );
};

export default EditorContent;

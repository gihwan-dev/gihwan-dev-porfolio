import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const EditorLayout: FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen min-h-dvh flex-col gap-6 px-6 py-6">
      {children}
    </main>
  );
};

export default EditorLayout;

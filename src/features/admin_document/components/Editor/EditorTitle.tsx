import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const EditorTitle: FC<Props> = ({ children }) => {
  return <h1 className="text-center text-xl">{children}</h1>;
};

export default EditorTitle;

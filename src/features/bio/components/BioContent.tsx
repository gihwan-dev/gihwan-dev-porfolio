import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BioContent: FC<Props> = ({ children }) => {
  return <div className="flex flex-col items-center gap-12">{children}</div>;
};
export default BioContent;

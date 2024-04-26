import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PreviewLayout: FC<Props> = ({ children }) => {
  return (
    <div className="relative h-full w-full flex-col items-center overflow-auto bg-main-background pb-24">
      {children}
    </div>
  );
};

export default PreviewLayout;

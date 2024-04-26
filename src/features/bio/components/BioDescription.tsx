import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BioDescription: FC<Props> = ({ children }) => {
  return (
    <p className="w-full max-w-[29rem] break-keep text-center text-lg text-text-gray sm:text-xl">
      {children}
    </p>
  );
};

export default BioDescription;

import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BioTitle: FC<Props> = ({ children }) => {
  return (
    <h1
      className={
        'w-full max-w-[29rem] break-keep text-center text-4xl text-white sm:text-5xl'
      }
    >
      {children}
    </h1>
  );
};

export default BioTitle;

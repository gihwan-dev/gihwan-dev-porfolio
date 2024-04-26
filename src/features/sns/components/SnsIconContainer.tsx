import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const SnsIconContainer: FC<Props> = ({ children }) => {
  return <div className={'flex flex-row gap-12 sm:gap-24'}>{children}</div>;
};

export default SnsIconContainer;

'use client';

import React, { type FC, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  children: ReactNode;
};

const PreviewActions: FC<Props> = ({ children }) => {
  const pathName = usePathname();

  if (pathName.startsWith('/admin')) {
    return (
      <div className={'absolute right-10 top-10 flex flex-row gap-4'}>
        {children}
      </div>
    );
  }
  return null;
};

export default PreviewActions;

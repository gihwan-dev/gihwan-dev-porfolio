'use client';

import Link from 'next/link';
import { motion, type MotionProps } from 'framer-motion';
import { type FC, type ReactNode } from 'react';

const variants: MotionProps = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

interface Props {
  children: ReactNode;
  documentId: number;
}

const ProjectsOverviewItem: FC<Props> = ({ children, documentId }) => {
  return (
    <motion.li {...variants}>
      <Link
        href={'/projects/' + documentId}
        className={'group flex flex-col gap-3'}
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default ProjectsOverviewItem;

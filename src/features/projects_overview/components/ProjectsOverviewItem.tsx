'use client';

import Link from 'next/link';
import { type Documents } from '@prisma/client';
import ProjectsOverviewImage from './ProjectsOverviewImage';
import ProjectOverviewDescription from './ProjectOverviewDescription';
import { motion, type MotionProps } from 'framer-motion';

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
  document: Documents;
}

const ProjectsOverviewItem: React.FC<Props> = ({ document }) => {
  return (
    <motion.li {...variants}>
      <Link
        href={'/projects/' + document.document_id}
        className={'group flex flex-col gap-3'}
      >
        <ProjectsOverviewImage src={document.thumbnail} />
        <ProjectOverviewDescription
          title={document.title}
          description={document.description}
        />
      </Link>
    </motion.li>
  );
};

export default ProjectsOverviewItem;

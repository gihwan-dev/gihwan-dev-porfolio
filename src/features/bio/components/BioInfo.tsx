'use client';

import { fadeInFromTop } from '~/utils/framer-motion-utils';

import { motion } from 'framer-motion';
import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BioInfo: FC<Props> = ({ children }) => {
  return (
    <motion.div {...fadeInFromTop} className="flex flex-col gap-4">
      {children}
    </motion.div>
  );
};

export default BioInfo;

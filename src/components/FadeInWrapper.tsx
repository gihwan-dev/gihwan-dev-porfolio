'use client';

import { motion, type MotionProps } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const motionProps: MotionProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const FadeInWrapper: React.FC<Props> = ({ children }) => {
  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default FadeInWrapper;

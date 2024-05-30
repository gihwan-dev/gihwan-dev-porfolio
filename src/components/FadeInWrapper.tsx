'use client';

import { motion, type MotionProps } from 'framer-motion';
import React from 'react';
import { type ChildrenProps } from '~/types/props-types';

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

export default function FadeInWrapper({ children }: ChildrenProps) {
  return <motion.div {...motionProps}>{children}</motion.div>;
}

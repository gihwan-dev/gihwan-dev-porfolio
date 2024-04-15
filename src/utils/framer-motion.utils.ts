import { type MotionProps } from 'framer-motion';

export const fadeInFromLeft: MotionProps = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.7,
  },
};

export const fadeInFromTop: MotionProps = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.7,
  },
};

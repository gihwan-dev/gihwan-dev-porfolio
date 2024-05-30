import { type ChildrenProps } from '~/types/props-types';
import { motion, type MotionProps } from 'framer-motion';

const navAnimation: MotionProps = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
  },
  exit: {
    x: '100%',
  },
  transition: {
    duration: 0.3,
  },
};

export default function SmallNavListContainerView({ children }: ChildrenProps) {
  return (
    <motion.ul
      {...navAnimation}
      className="fixed right-0 top-0 z-20 flex h-screen flex-col gap-8 bg-main-foreground px-10 py-6 font-bold text-white"
    >
      {children}
    </motion.ul>
  );
}

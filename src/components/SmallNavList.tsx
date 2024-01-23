'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import MenuIcon from '~/assets/svgs/MenuIcon';

import { type MotionProps, motion, AnimatePresence } from 'framer-motion';

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

const SmallNavList: React.FC<{
  navList: { text: string; href: string }[];
}> = ({ navList }) => {
  const [open, setOpen] = React.useState(false);

  const pathName = usePathname();

  const openButtonHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={openButtonHandler}>
        <MenuIcon />
      </button>
      <AnimatePresence>
        {open && (
          <>
            <div
              onClick={onCloseHandler}
              className="w-screen h-screen absolute top-0 left-0 z-10"
            ></div>
            <motion.ul
              {...navAnimation}
              className="absolute h-screen top-0 right-0 bg-main-foreground z-20 flex flex-col px-10 py-6 gap-8 text-white font-bold"
            >
              {navList.map(item => {
                return (
                  <Link
                    className={`${pathName.startsWith(item.href) ? 'text-text-primary-red' : 'text'}`}
                    key={`${item.text}-small-nav-bar`}
                    href={item.href}
                  >
                    {item.text.toUpperCase()}
                  </Link>
                );
              })}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SmallNavList;

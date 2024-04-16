'use client';

import { useState } from 'react';
import MenuIcon from '~/assets/svgs/MenuIcon';

import { AnimatePresence, motion, type MotionProps } from 'framer-motion';

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
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const openButtonHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setOpen(false);
      setSelectedId(id);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
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
              className="absolute left-0 top-0 z-10 h-screen w-screen"
            ></div>
            <motion.ul
              {...navAnimation}
              className="absolute right-0 top-0 z-20 flex h-screen flex-col gap-8 bg-main-foreground px-10 py-6 font-bold text-white"
            >
              {navList.map(item => {
                return (
                  <button
                    className={`${selectedId === item.href ? 'text-text-primary-red' : 'text'}`}
                    onClick={() => scrollToSection(item.href)}
                    key={`${item.text}-small-nav-bar`}
                  >
                    {item.text.toUpperCase()}
                  </button>
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

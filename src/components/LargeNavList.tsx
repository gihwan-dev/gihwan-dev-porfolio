'use client';

import { type FC } from 'react';

const LargeNavList: FC<{
  navList: { text: string; href: string }[];
}> = ({ navList }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <ul className="flex flex-row items-center gap-7 text-base font-bold tracking-widest text-white">
      {navList.map(item => {
        return (
          <button
            key={`${item.text}-nav-bar`}
            onClick={() => scrollToSection(item.href)}
            className="cursor-pointer transition-all hover:text-text-primary-red"
          >
            {item.text.toUpperCase()}
          </button>
        );
      })}
    </ul>
  );
};

export default LargeNavList;

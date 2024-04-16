'use client';

import SmallTag from '~/components/SmallTag';
import { type TagWithCount } from '../types';
import { motion, type MotionProps } from 'framer-motion';
import { useState } from 'react';

interface Props {
  tag: TagWithCount;
  eachHeight: number;
}

export const SkillsChartBar: React.FC<Props> = ({ tag, eachHeight }) => {
  const [visible, setVisible] = useState(false);
  const variants: MotionProps = {
    initial: {
      height: 0,
    },
    animate: {
      height: eachHeight * tag._count.Documents - 10,
    },
    transition: {
      duration: 0.2 * tag._count.Documents,
    },
  };

  const onHoverStart = () => {
    setVisible(true);
  };

  const onHoverEnd = () => {
    setVisible(false);
  };

  return (
    <li
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={
        'group flex list-none flex-col items-center gap-3 opacity-60 transition-all hover:opacity-100'
      }
    >
      <div
        className={`${visible ? 'opacity-100' : 'opacity-0'} h-4 font-bold text-white transition-all duration-500`}
      >
        {tag._count.Documents}회 사용
      </div>
      <motion.div
        {...variants}
        style={{
          backgroundColor: tag.background_color,
        }}
        className={`w-12 rounded-t-sm`}
      ></motion.div>
      <SmallTag
        name={tag.name}
        backgroundColor={tag.background_color}
        textColor={tag.text_color}
      />
    </li>
  );
};

export default SkillsChartBar;

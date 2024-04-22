'use client';

import { motion } from 'framer-motion';
import { type FC } from 'react';
import { fadeInFromTop } from '~/utils/framer-motion.utils';

const BioText: FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <motion.div {...fadeInFromTop} className="flex flex-col gap-4">
      <h1
        className={
          'w-full max-w-[29rem] break-keep text-center text-4xl text-white sm:text-5xl'
        }
      >
        {title}
      </h1>
      <p className="w-full max-w-[29rem] break-keep text-center text-lg text-text-gray sm:text-xl">
        {description}
      </p>
    </motion.div>
  );
};

export default BioText;

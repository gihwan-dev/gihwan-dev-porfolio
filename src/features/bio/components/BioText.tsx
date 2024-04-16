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
        style={{
          lineHeight: 'normal',
          maxWidth: '29rem',
          width: '100%',
          textAlign: 'center',
          fontSize: '3rem',
          color: 'white',
          wordBreak: 'keep-all',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          lineHeight: '1.975rem',
          maxWidth: '29rem',
          width: '100%',
          textAlign: 'center',
          fontSize: '1.125rem',
          fontWeight: 400,
          wordBreak: 'keep-all',
        }}
        className="text-text-gray"
      >
        {description}
      </p>
    </motion.div>
  );
};

export default BioText;

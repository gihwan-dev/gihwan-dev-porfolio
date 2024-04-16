'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInFromLeft } from '~/utils/framer-motion.utils';
import { type FC } from 'react';

const BioImage: FC<{
  bio_img: string;
}> = ({ bio_img }) => {
  return (
    <motion.div
      style={{
        width: 374,
        height: 476,
      }}
      {...fadeInFromLeft}
    >
      <Image
        priority={true}
        sizes={'374'}
        style={{
          borderRadius: '0.625rem',
          objectFit: 'cover',
        }}
        fill
        src={bio_img}
        alt="my image"
      />
    </motion.div>
  );
};

export default BioImage;

'use client';

import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInFromLeft } from '~/utils/framer-motion';

const BioImage: React.FC<{
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
        style={{
          borderRadius: '0.625rem',
        }}
        fill
        objectFit="cover"
        src={bio_img}
        alt="my image"
      />
    </motion.div>
  );
};

export default BioImage;

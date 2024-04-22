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
        fill
        className={'object-cover sm:rounded-lg'}
        src={bio_img}
        alt="my image"
      />
    </motion.div>
  );
};

export default BioImage;

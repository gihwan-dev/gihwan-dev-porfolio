import { db } from '../db';

export const findBio = () => {
  return db.bio.findFirst({
    where: {
      bio_id: 0,
    },
  });
};

export const initBio = () => {
  return db.bio.create({
    data: {
      bio_img: '',
      description: '',
      email: '',
      resume_link: '',
      title: '',
    },
  });
};

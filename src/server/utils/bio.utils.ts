import { db } from '../db';
import { hashPassword } from './hash';

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

export const initUser = async () => {
  const user = await db.user.findUnique({
    where: {
      email: 'rlghks358@naver.com',
    },
  });
  if (user) {
    console.log(user);
    return;
  }
  const password = await hashPassword('ks200355');
  return db.user.create({
    data: {
      email: 'rlghks358@naver.com',
      password: password,
    },
  });
};

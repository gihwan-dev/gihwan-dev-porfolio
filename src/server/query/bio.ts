import { db } from '../db';
import { hashPassword } from './hash';

export const findBio = async () => {
  return db.bio.findFirst();
};

export const initUser = async () => {
  const user = await db.user.findUnique({
    where: {
      email: 'rlghks358@naver.com',
    },
  });
  if (user) {
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

interface UpdateBioParams {
  bio_img: string;
  title: string;
  description: string;
  resume_link: string;
  email: string;
}

export const updateBio = async (input: UpdateBioParams) => {
  const prev = await db.bio.findFirst();
  if (!prev) {
    return db.bio.create({
      data: input,
    });
  }
  return db.bio.update({
    where: {
      bio_id: prev.bio_id,
    },
    data: input,
  });
};

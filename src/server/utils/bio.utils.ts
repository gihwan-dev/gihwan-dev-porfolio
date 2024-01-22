import { type updateBioType } from '~/types/bio';
import { db } from '../db';
import { hashPassword } from './hash';

export const findBio = () => {
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

export const updateBio = async (input: updateBioType) => {
  const prev = await db.bio.findFirst();
  if (!prev) {
    return await db.bio.create({
      data: input,
    });
  }
  return await db.bio.update({
    where: {
      bio_id: prev.bio_id,
    },
    data: input,
  });
};

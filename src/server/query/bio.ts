import { type UpdateBioType } from '~/features/bio';
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

export const updateBio = async (input: UpdateBioType) => {
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

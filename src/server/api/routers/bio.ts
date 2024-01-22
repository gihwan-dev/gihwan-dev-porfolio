import { findBio, initBio, initUser } from '~/server/utils/bio.utils';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const bioRouter = createTRPCRouter({
  getBio: publicProcedure.query(async () => {
    let data = await findBio();
    if (!data) {
      data = await initBio();
    }
    return data;
  }),
});

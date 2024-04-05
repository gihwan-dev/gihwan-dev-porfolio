import { findBio, initUser, updateBio } from '~/server/query/bio.utils';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { z } from 'zod';

export const bioRouter = createTRPCRouter({
  getBio: publicProcedure.query(async () => {
    return await findBio();
  }),

  init: publicProcedure.query(async () => {
    const result = await initUser();
    return result;
  }),

  createBio: protectedProcedure
    .input(
      z.object({
        bio_img: z.string(),
        title: z.string(),
        description: z.string(),
        resume_link: z.string(),
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      const result = await updateBio(input);

      if (!result) {
        return {
          message: 'failed try again.',
        };
      }
      return {
        message: 'success',
      };
    }),
});

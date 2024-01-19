import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { db } from '~/server/db';

export const bioRouter = createTRPCRouter({
  getBio: publicProcedure.query(async () => {
    return await db.bio.findFirst({
      where: {
        bio_id: 0,
      },
    });
  }),
});

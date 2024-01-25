import { getAllTag } from '~/server/utils/tag.utils';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const tagRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await getAllTag();
  }),
});

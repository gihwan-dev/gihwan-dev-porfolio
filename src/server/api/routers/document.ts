import {
  countAll,
  getAllDocument,
  getDocumentType,
} from '~/server/utils/document';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';

export const documentRouter = createTRPCRouter({
  getAllType: publicProcedure.query(async () => {
    return await getDocumentType();
  }),

  getAllDocument: publicProcedure
    .input(
      z.object({
        page: z.number(),
      }),
    )
    .query(async ({ input }) => {
      return await getAllDocument(input.page);
    }),

  countAll: publicProcedure.query(async () => {
    return await countAll();
  }),
});

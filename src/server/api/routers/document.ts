import { getDocumentType } from '~/server/utils/document';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const documentRouter = createTRPCRouter({
  getType: publicProcedure.query(async () => {
    return await getDocumentType();
  }),
});
